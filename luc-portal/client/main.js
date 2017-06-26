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

Template.dashboard.helpers({
  username: "John Doe",
  currentdate: "Tuesday, June 20, 2017 - 10:20 AM",
  camps: [
    { id:"camp1", img:"/img/categories/ar-camp.jpg", title: "AR Camp", campdesc:"Create augmented reality experiences.", campstatus:"In progress"},
    { id:"camp2", img:"/img/categories/vr-camp.jpg", title: "VR Camp", campdesc:"Create virtual reality experiences.", campstatus:"Upcoming"},
    { id:"camp3", img:"/img/categories/web-camp.jpeg", title: "WebDev Camp", campdesc:"Create stunning websites.", campstatus:"Upcoming"},
    { id:"camp4", img:"/img/categories/app-camp.jpg", title: "AppDev Camp", campdesc:"Create useful applications.", campstatus:"Upcoming"}
  ],

  articles: [
    { id:"art1", img:"/img/articles/article-1.jpg", title: "Intel is bringing drones and VR to the Olympics", author: "Terry Collins", articledesc:"The tech giant signs an eight-year deal to use its technologies during the Olympics, starting with the 2018 Winter Games.", date: "June 21, 2017", source: "https://www.cnet.com/news/intel-olympics-partnership-drones-virtual-reality/" },
    { id:"art2", img:"/img/articles/article-2.jpg", title: "Four Risks To Avoid During B2B Web Development", author: "Alexander Pirinsky", articledesc:"Here is a staple piece of advice given by startup coaches, tech-savvy consultants, network gurus and self-help experts on how to launch a business online: Be effective.", date: "June 1, 2017", source: "https://www.forbes.com/sites/forbescommunicationscouncil/2017/06/01/four-risks-to-avoid-during-b2b-web-development/" },
    { id:"art3", img:"/img/articles/article-3.jpg", title: "This Startup Is Making Virtual and Augmented Reality So Crisp It Looks Real", author: "Rachel Metz", articledesc:"Varjo’s prototype of a VR headset shows much clearer images in the center of the display, a much-needed advancement that could help consumer adoption.", date: "June 9, 2017", source: "https://www.technologyreview.com/s/608115/this-startup-is-making-virtual-and-augmented-reality-so-crisp-it-looks-real/" },
    { id:"art4", img:"/img/articles/article-4.jpg", title: "Five ways virtual reality is improving healthcare", author: "Wendy Powell", articledesc:"Virtual reality is much more than just a new form of entertainment, it is increasingly being used in a wide range of medical applications, from treatments to training.", date: "June 9, 2017", source: "https://phys.org/news/2017-06-ways-virtual-reality-healthcare.html" }
  ]
})

Template.itemgrid.helpers({
  curationItems: [
    { id: "item1", infoId: "info1", img:"/img/img1.jpg", title: "Test Item 1", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", category: "Article", rating: "Expert", date: "June 9, 2017", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ]},
    { id: "item2", infoId: "info2", img:"/img/img2.jpg", title: "Test Item 2", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", category: "Guide", rating: "Beginner", date: "June 9, 2017", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ]},
    { id: "item3", infoId: "info3", img:"/img/img3.jpg", title: "Test Item 3", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", category: "Video", rating: "Beginner", date: "June 9, 2017", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ]},
    { id: "item4", infoId: "info4", img:"/img/img4.jpg", title: "Test Item 4", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", category: "Article", rating: "Expert", date: "June 9, 2017", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ]},
    { id: "item5", infoId: "info5", img:"/img/img5.jpg", title: "Test Item 5", shortdesc: "ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", category: "Article", rating: "Advanced", date: "June 9, 2017", tags: [ { tag: "cool" }, { tag: "lorem" }, { tag: "ipsum" } ] }
  ]
});


Template.detail.helpers({
  title: "UVW Unwrapping",
  category: "Tutorial",
  rating: "Intermediate",
  date: "June 9, 2017",
  img:"/img/headers/uvw.PNG",
  description: "We will now texture our assets by using UVW Unwrapping in 3DS Max. With the Unwrap UVW modifier, we can assign the mapping for textures to specific objects and their parts (faces, edges, etc.). For instance, in a human character asset we can assign a face texture to the head, while we assign cloth textures to the body. After successfully unwrapping and assigning textures to our designs, we can then import our models to Unity.",
  requirements: [ { reqimg: "/img/logos/3dsmax.png", reqtitle: "3DS Max", reqdesc: "Asset Creation, UVW Unwrap" }, { reqimg: "/img/logos/photoshop.jpg", reqtitle: "Adobe Photoshop", reqdesc: "Texture Mapping" }, { reqimg: "/img/logos/unity.png", reqtitle: "Unity Engine", reqdesc: "Asset Import" } ],
  tags: [ { tag: "uvw" }, { tag: "unwrap" }, { tag: "textures" } ],
  actions: [ { action: "Download" }, { action: "Share" } ]
});
