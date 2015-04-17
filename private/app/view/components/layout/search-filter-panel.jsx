/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var ContactsSearchFilter = require('./../../../contacts-search-filter');
var NameSearchFilter = require('./../filters/name-search-filter.jsx');
var PhoneSearchFilter = require('./../filters/phone-search-filter.jsx');
var LocationSearchFilter = require('./../filters/location-search-filter.jsx');
var GenderSearchFilter = require('./../filters/gender-search-filter.jsx');
var SignSearchFilter = require('./../filters/sign-search-filter.jsx');

var SearchFilterPanel = React.createClass({
    render: function () {
        return (
            <aside id="search-filter-panel" onChange={this.handleChange}>
                <header>
                    <h3>Search filter</h3>
                </header>
                <NameSearchFilter ref="nameFilter" filter={this.props.filter} />
                <PhoneSearchFilter ref="phoneFilter" filter={this.props.filter} />
                <LocationSearchFilter ref="locationFilter" filter={this.props.filter} locations={this.props.locations}/>
                <GenderSearchFilter ref="genderFilter" filter={this.props.filter} />
                <SignSearchFilter ref="signFilter" filter={this.props.filter} />
            </aside>
        );
    }
});

module.exports = SearchFilterPanel;
