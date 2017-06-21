FlowRouter.route( '/dashboard', {
  action: function() {
    console.log( "Dashboard" );
    BlazeLayout.render('applicationLayout', {
      main: 'dashboard'
    })
  },
  name: 'camp'
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
