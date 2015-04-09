/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
    render: function () {
        return (
            <section id="container">
                <header>
                    <h1>Phone Book</h1>
                </header>
                <RouteHandler/>
            </section>
        );
    }
});

module.exports = App;
