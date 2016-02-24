
FlowRouter.notFound = {
  action() {
    ReactLayout.render(MainLayout, { 
      content:  <NotFound />
    });
  }
};

FlowRouter.route('/',{
  name: 'Home', 
  action(params) {
    ReactLayout.render(MainLayout, { 
      content:  <Home />
    });
  }
});


