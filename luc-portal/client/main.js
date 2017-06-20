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

Template.itemgrid.helpers({
  curationItems: [
    { id: "item1", infoId: "info1", img:"/img/img1.jpg", title: "Test Item 1", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] },
    { id: "item2", infoId: "info2", img:"/img/img2.jpg", title: "Test Item 2", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] },
    { id: "item3", infoId: "info3", img:"/img/img3.jpg", title: "Test Item 3", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] },
    { id: "item4", infoId: "info4", img:"/img/img4.jpg", title: "Test Item 4", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] },
    { id: "item5", infoId: "info5", img:"/img/img5.jpg", title: "Test Item 5", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] },
    { id: "item6", infoId: "info6", img:"/img/img6.jpg", title: "Test Item 6", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] },
    { id: "item1", infoId: "info1", img:"/img/img1.jpg", title: "Test Item 1", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] },
    { id: "item2", infoId: "info2", img:"/img/img2.jpg", title: "Test Item 2", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] },
    { id: "item3", infoId: "info3", img:"/img/img3.jpg", title: "Test Item 3", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] },
    { id: "item4", infoId: "info4", img:"/img/img4.jpg", title: "Test Item 4", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] },
    { id: "item5", infoId: "info5", img:"/img/img5.jpg", title: "Test Item 5", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] },
    { id: "item6", infoId: "info6", img:"/img/img6.jpg", title: "Test Item 6", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", difficulty: "4", rating: "Expert", time: "08:00 07/10/17", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ], categories: [ { category: "computer"}, { category: "language"} ], requirements: [ { reqtitle: "Unreal Engine", reqdesc: "Needs Unreal Engine to work."}, { reqtitle: "Unity", reqdesc: "Needs Unity to work."} ] }
  ]
});
