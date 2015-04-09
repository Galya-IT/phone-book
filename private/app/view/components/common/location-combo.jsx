/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var LocationCombo = React.createClass({
    getDefaultProps: function () {
        return {
            defaultLocation: 'All locations',
            emptyLocation: 'No location'
        }
    },
    handleChange: function (event) {
        this.props.onChange(this.props.defaultLocation, event.target.value);
    },
    render: function () {
        return (
            <select id="location-combo" onChange={this.handleChange}>
                <option value={this.props.defaultLocation}>{this.props.defaultLocation}</option>
                {
                    this.props.locations.map(function (loc) {
                        return <option key={loc} value={loc}>{loc}</option>
                    })
                }
            </select>
        );
    }
});

module.exports = LocationCombo;
