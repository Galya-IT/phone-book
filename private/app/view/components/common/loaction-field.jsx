/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var ContactsStorageService = require('./../../../persistence/contacts-storage-service.js');

var LocationField = React.createClass({
    getDefaultProps: function () {
        return {
            LOCATIONS: ContactsStorageService.getAllLocations()
        }
    },
    render: function () {
        return <div>
            <datalist id="locations" autoComplete="on">
                {
                    this.props.LOCATIONS.map(function (loc) {
                        return <option key={loc} value={loc}>{loc}</option>
                    })
                }
            </datalist>
            <input ref="input" type="text" list="locations" maxLength={this.props.maxLength}
                   placeholder="Location"/>
        </div>
    }
});

module.exports = LocationField;
