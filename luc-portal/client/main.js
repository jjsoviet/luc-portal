import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.itemcollection.helpers({
  curationItems: [
    { title: "Item", description: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", url: "urlhere", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool"}, { tag: "lorem"}, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."} ] },
    { title: "Item", description: "Item Description", url: "urlhere", difficulty: 1, rating: "Expert", time: "08:00"},
    { title: "Item", description: "Item Description", url: "urlhere", difficulty: 1, rating: "Expert", time: "08:00"},
    { title: "Item", description: "Item Description", url: "urlhere", difficulty: 1, rating: "Expert", time: "08:00"},
    { title: "Item", description: "Item Description", url: "urlhere", difficulty: 1, rating: "Expert", time: "08:00"},
    { title: "Item", description: "Item Description", url: "urlhere", difficulty: 1, rating: "Expert", time: "08:00"},
    { title: "Item", description: "Item Description", url: "urlhere", difficulty: 1, rating: "Expert", time: "08:00"}
  ]
});
