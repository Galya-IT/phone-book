/**
 * Created by Galya Bogdanova on 01-Apr-15.
 */

"use strict";

var React = require('react');
var ReactRouter = require('react-router');

var App = require('./../view/components/app.jsx');
var AddEditContactPage = require('./../view/components/pages/add-edit-contact-page.jsx');
var MainPage = require('./../view/components/pages/main-page.jsx');

var Routes = (function() {
    var Router = ReactRouter;
    var Route = Router.Route;
    var DefaultRoute = Router.DefaultRoute;

    var routes = (
        <Route handler={App} path="/">
            <Route name="edit/:tel" handler={AddEditContactPage}/>
            <Route name="add" handler={AddEditContactPage}/>
            <DefaultRoute handler={MainPage}/>
        </Route>
    );

    /*
     var HistoryLocation = Router.HistoryLocation;
     var HashLocation = Router.HashLocation;
     HistoryLocation.replace(HashLocation.getCurrentPath());
     */

    Router.run(routes, function (Handler) {
        React.render(<Handler/>, document.body);
    });
}());

module.exports = Routes;