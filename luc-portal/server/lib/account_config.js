var userLogin = function(error) {
  if (!error) {
    console.log("test1");
    FlowRouter.go('dashboard');
  }
};

var userLogout = function() {
  console.log("test2");
  FlowRouter.go('login');
};

AccountsTemplates.configure({
  onSubmitHook: userLogin,
  onLogoutHook: userLogout
});
