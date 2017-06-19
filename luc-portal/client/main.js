import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//Firebase
var config = {
  apiKey: "AIzaSyCqTpTl8lp1suEtZadw1UEaSvEXjna6Ljo",
  authDomain: "luc-portal.firebaseapp.com",
  databaseURL: "https://luc-portal.firebaseio.com",
  projectId: "luc-portal",
  storageBucket: "luc-portal.appspot.com",
  messagingSenderId: "237785373022"
};
firebase.initializeApp(config);
var db = firebase.database();
var ref = db.ref('Items').orderByKey();

ref.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var uid = childSnapshot.key;
    });
});

Template.itemcollection.helpers({
  curationItems: [
    { id: "item1", infoId: "info1", color:"#D63D3D", title: "Test Item 1", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", description: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", url: "urlhere", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] },
    { id: "item2", infoId: "info2", color:"#1356AF", title: "Test Item 2", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", description: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", url: "urlhere", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] },
    { id: "item3", infoId: "info3", color:"#DD8622", title: "Test Item 3", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", description: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", url: "urlhere", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] }
  ]
});
