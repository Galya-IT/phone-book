/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var GenderRadioGroup = require('./../common/gender-radio-group.jsx');

var GenderSearchFilter = React.createClass({
    /**
     * Default search filter value indicates no criteria defined.
     */
    handleChange: function (defaultGender, chosenGender) {
        var filterValue = (chosenGender !== defaultGender) ? chosenGender : "";
        this.props.filter.setGenderFilter(filterValue);
    },
    render: function () {
        return (
            <GenderRadioGroup onChange={this.handleChange}/>
        );
    }
});

module.exports = GenderSearchFilter;
