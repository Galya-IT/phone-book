/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var AddNewButton = require('./../common/add-new-button.jsx');
var SearchPanel = require('./../layout/search-panel.jsx');

var MainPage = React.createClass({
    render: function () {
        return (
            <section id="main-section-wrapper">
                <AddNewButton />
                <SearchPanel />
            </section>
        );
    }
});

module.exports = MainPage;
