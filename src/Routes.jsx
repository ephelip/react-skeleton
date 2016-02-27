var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var CreateHistory = require('history/Lib/createHashHistory');

var History = new CreateHistory({
  queryKey: false
});

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var ListPage = require('./components/ListPage.jsx');
var FormPage = require('./components/FormPage.jsx');

var Routes = (
  <Router history={History}>
      <Route path="/" component={BasePage}>
          <IndexRoute component={HomePage} />
          <Route path="/list/:listId" component={ListPage} />
          <Route path="/form" component={FormPage} />
      </Route>
  </Router>
);

module.exports = Routes;
