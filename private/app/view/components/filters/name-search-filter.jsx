/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var NameSearchFilter = React.createClass({
    handleChange: function (event) {
        var nameSearchedFor = event.target.value.trim();
        this.props.filter.setNameFilter(nameSearchedFor);
    },
    render: function () {
        return (
            <input type="text" id="search-by-name" placeholder="Name" onChange={this.handleChange}/>
        );
    }
});

module.exports = NameSearchFilter;
