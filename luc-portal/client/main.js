import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Camps = new Mongo.Collection('camps');
Articles = new Mongo.Collection('articles');
CampItems = new Mongo.Collection('campitems');

var date = new Date();
var currentDate = moment(date).format("dddd, MMMM D YYYY - hh:mm a");

var sortOrder = {};
sortOrder["date"] = -1;
var categoryTerm = "Tutorial";
var ratingTerm = "Beginner";

const Schemas = {};

Schemas.CampItem = new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  shortdesc: {
    type: String,
    label: "Short Description"
  },
  desc: {
    type: String,
    label: "Full Description"
  },
  category: {
    type: String,
    label: "Category"
  },
  rating: {
    type: String,
    label: "Difficulty Rating"
  }
});

CampItems.attachSchema(Schemas.CampItem);

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM D, YYYY - hh:mm a');
});

Template.registerHelper('formatShortDate', function(date) {
  return moment(date).format('MMMM D, YYYY');
});

Template.dashboard.helpers({
  username: function() {
    if (Meteor.user()) {
      return Meteor.user().emails[0].address;
    }
  },
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
    var searchRegex = new RegExp(Session.get('search/keyword'), 'i');
    var categoryRegex = new RegExp(Session.get('search/category'), 'i');
    var ratingRegex = new RegExp(Session.get('search/rating'), 'i');

    var items = CampItems.find({title: searchRegex, rating: ratingRegex, category: categoryRegex} , {sort: sortOrder});
    return items;
  }
})


Template.searchbar.helpers({
  categories: function() {
    return ["Tutorial", "Video", "Article"];
  },

  ratings: function() {
    return ["Beginner", "Intermediate", "Advanced"];
  }
})

Template.searchbar.events({
  'submit form': function(event) {
    event.preventDefault();
    var searchTerm = event.target.titlesearch.value;

    Session.set('search/keyword', searchTerm);
    Session.set('search/category', categoryTerm);
    Session.set('search/rating', ratingTerm);
  },

  "change #category-select": function (event, template) {
    categoryTerm = $(event.currentTarget).val();
  },

  "change #rating-select": function (event, template) {
    ratingTerm = $(event.currentTarget).val();
  }
});
