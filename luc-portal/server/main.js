import { Meteor } from 'meteor/meteor';

Camps = new Mongo.Collection('camps');
Articles = new Mongo.Collection('articles');
CampItems = new Mongo.Collection('campitems');

Meteor.startup(() => {
  // code to run on server at startup
});
