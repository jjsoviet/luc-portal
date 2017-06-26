import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Camps = new Mongo.Collection('camps');
Articles = new Mongo.Collection('articles');
CampItems = new Mongo.Collection('campitems');
var date = new Date();
var currentDate = moment(date).format("dddd, MMMM D YYYY - hh:mm a");

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
    var items = CampItems.find({campid: FlowRouter.getParam('campid')});
    return items;
  }
});


Template.detail.helpers({
  campdetail: function() {
    var items = CampItems.find({itemid: FlowRouter.getParam('itemid')});
    return items;
  }
});
