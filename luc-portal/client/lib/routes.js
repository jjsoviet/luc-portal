FlowRouter.route( '/login', {
  action: function() {
    console.log( "Login" );
    BlazeLayout.render('applicationLayout', {
      main: 'login'
    })
  },
  name: 'login'
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

FlowRouter.route( '/camp', {
  action: function() {
    console.log( "Dashboard" );
    BlazeLayout.render('applicationLayout', {
      main: 'itemgrid'
    })
  },
  name: 'camp'
});


FlowRouter.route( '/detail', {
  action: function() {
    console.log( "Detail" );
    BlazeLayout.render('applicationLayout', {
      main: 'detail'
    })
  },
  name: 'detail'
});
