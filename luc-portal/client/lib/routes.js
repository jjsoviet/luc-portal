FlowRouter.route( '/', {
  action: function() {
    if (!Meteor.user() && !Meteor.loggingIn()) {
      FlowRouter.go('login');
    } else if (Meteor.user() || Meteor.loggingIn()) {
      FlowRouter.go('dashboard');
    }
  }
});

FlowRouter.route( '/login', {
  action: function() {
    if (!Meteor.user() && !Meteor.loggingIn()) {
      BlazeLayout.render('applicationLayout', {
        main: 'login'
      })
    } else if (Meteor.user() || Meteor.loggingIn()) {
      FlowRouter.go('dashboard');
    }
  },
  name: 'login'
});

FlowRouter.route( '/dashboard', {
  action: function() {
    if (!Meteor.user() && !Meteor.loggingIn()) {
      FlowRouter.go('login');
    } else if (Meteor.user() || Meteor.loggingIn()) {
      BlazeLayout.render('applicationLayout', {
        main: 'dashboard'
      })
    }
  },
  name: 'dashboard'
});

FlowRouter.route( '/camp/:campid', {
  action: function(params) {
    BlazeLayout.render('applicationLayout', {
      main: 'itemgrid'
    })
  },
  name: 'camp'
});


FlowRouter.route( '/detail/:itemid', {
  action: function(params) {
    BlazeLayout.render('applicationLayout', {
      main: 'detail'
    })
  },
  name: 'detail'
});


FlowRouter.route( '/search', {
  action: function() {
    BlazeLayout.render('applicationLayout', {
      main: 'search'
    })
  },
  name: 'search'
});

FlowRouter.route( '/contributor', {
  action: function() {
    BlazeLayout.render('applicationLayout', {
      main: 'contributor'
    })
  },
  name: 'contributor'
});


FlowRouter.route( '/contributor/additem', {
  action: function() {
    BlazeLayout.render('applicationLayout', {
      main: 'additem'
    })
  },
  name: 'additem'
});
