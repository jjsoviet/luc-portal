import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Camps = new Mongo.Collection('camps');
Articles = new Mongo.Collection('articles');
CampItems = new Mongo.Collection('campitems');
var date = new Date();
var currentDate = moment(date).format("dddd, MMMM D YYYY - hh:mm a");
var sortOrder = {};
sortOrder["date"] = -1;


Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM D, YYYY - hh:mm a');
});

Template.registerHelper('formatShortDate', function(date) {
  return moment(date).format('MMMM D, YYYY');
});

Template.registerHelper("formatRating", function(rating){
  if (rating == 1) {
    return "Beginner";
  } else if (rating == 2) {
    return "Intermediate";
  } else if (rating == 3) {
    return "Advanced";
  }

  return "Unknown";
});

Template.registerHelper("formatCategory", function(category){
  if (category == 1) {
    return "Tutorial";
  } else if (category == 2) {
    return "Video";
  } else if (category == 3) {
    return "Article";
  }

  return "Unknown";
});

Template.dashboard.helpers({
  username: "John Doe",
  currentdate: currentDate,
  camps: function() {
    return Camps.find();
  },
  articles: function() {
    return Articles.find();
  }
})

Template.itemgrid.helpers({
  campitems: function() {
    var items = CampItems.find({campid: FlowRouter.getParam('campid')}, {sort: sortOrder});
    return items;
  }
});


Template.detail.helpers({
  campdetail: function() {
    var items = CampItems.find({itemid: FlowRouter.getParam('itemid')});
    return items;
  }
});

Template.search.helpers({
  searchitems: function() {
    var searchTerm = new RegExp(Session.get('search/keyword'), 'i');
    var items = CampItems.find({title: searchTerm}, {sort: sortOrder});
    return items;
  }
})


Template.searchbar.helpers({
  categories: function() {
    return [1,2,3];
  },

  ratings: function() {
    return [1,2,3];
  }
})

Template.searchbar.events({
  'submit form': function(event) {
    event.preventDefault();
    var searchTerm = event.target.titlesearch.value;
    Session.set('search/keyword', searchTerm);
  },

  "change #filter-select": function (event, template) {
    var filter = $(event.currentTarget).val();
    console.log(filter);
  },

  "change #rating-select": function (event, template) {
    var rating = $(event.currentTarget).val();
    console.log(rating);
  }
});
