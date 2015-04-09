/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var CommonUtils = require('./../../../utils/common-utils');

var HomeButton = React.createClass({
    handleClick: function (event) {
        CommonUtils.redirectTo('#/');
        event.preventDefault();
    },
    render: function () {
        return (
            <button type="button" id="btn-home" onClick={this.handleClick}>Home</button>
        );
    }
});

module.exports = HomeButton;
