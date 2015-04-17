/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var CommonUtils = require('./../../../utils/common-utils.js');

var AddNewButton = React.createClass({
    handleClick: function (event) {
        CommonUtils.redirectTo('#/add');
        event.preventDefault();
    },
    render: function () {
        return (
            <button type="button" id="btn-add" onClick={this.handleClick}>Add new contact</button>
        );
    }
});

module.exports = AddNewButton;