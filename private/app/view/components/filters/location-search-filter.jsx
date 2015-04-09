/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var LocationCombo = require('./../common/location-combo.jsx');

var LocationSearchFilter = React.createClass({
    /**
     * Default search filter value indicates no criteria defined.
     */
    handleChange: function (defaultLocation, chosenLocation) {
        var filterValue = (chosenLocation !== defaultLocation) ? chosenLocation : "";
        this.props.filter.setLocationFilter(filterValue);
    },
    render: function () {
        return (
            <LocationCombo locations={this.props.locations} onChange={this.handleChange}/>
        );
    }
});

module.exports = LocationSearchFilter;
