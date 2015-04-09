/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var GenderSelector = React.createClass({
    getDefaultProps: function () {
        return {
            defaultGender: 'Male'
        }
    },
    render: function () {
        return <select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
    }
});

module.exports = GenderSelector;
