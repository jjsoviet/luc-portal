FlowRouter.route( '/login', {
  action: function() {
    console.log( "Login" );
    BlazeLayout.render('applicationLayout', {
      main: 'login'
    })
  },
  name: 'login'
});

FlowRouter.route( '/register', {
  action: function() {
    console.log( "Register" );
    BlazeLayout.render('applicationLayout', {
      main: 'register'
    })
  },
  name: 'register'
});

FlowRouter.route( '/dashboard', {
  action: function() {
    console.log( "Dashboard" );
    BlazeLayout.render('applicationLayout', {
      main: 'dashboard'
    })
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

FlowRouter.route( '/additem', {
  action: function() {
    BlazeLayout.render('applicationLayout', {
      main: 'additem'
    })
  },
  name: 'additem'
});
