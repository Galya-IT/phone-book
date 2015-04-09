/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var PhoneSearchFilter = React.createClass({
    handleChange: function (event) {
        var phoneSearchedFor = event.target.value.trim();
        this.props.filter.setPhoneFilter(phoneSearchedFor);
    },
    render: function () {
        return (
            <input type="tel" id="search-by-phone" placeholder="Phone" onChange={this.handleChange}/>
        );
    }
});

module.exports = PhoneSearchFilter;
