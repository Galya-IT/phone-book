/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var ContactsStorageService = require('./../../../persistence/contacts-storage-service.js');
var ContactsSearchFilter = require('./../../../contacts-search-filter');
var SearchFilterPanel = require('./search-filter-panel.jsx');
var SearchResultsPanel = require('./search-results-panel.jsx');

var SearchPanel = React.createClass({
    getInitialState: function() {
        var searchFilter = new ContactsSearchFilter();
        searchFilter.setIgnoreCase(true);
        return {
            contacts: searchFilter.getContacts(),
            locations: ContactsStorageService.getAllLocations(),
            searchFilter: searchFilter
        };
    },
    componentDidMount: function () {
        this.state.searchFilter.registerListener(this);
    },
    componentWillUnmount: function () {
        this.state.searchFilter.unregisterListener(this);
    },
    // callback
    handleFilterChanges: function () {
        this.setState({
            contacts: this.state.searchFilter.getContacts(),
            locations: ContactsStorageService.getAllLocations()
        });
    },
    render: function () {
        return (
            <section id="search-section">
                <SearchFilterPanel filter={this.state.searchFilter} locations={this.state.locations} />
                <SearchResultsPanel contacts={this.state.contacts}/>
            </section>
        );
    }
});

module.exports = SearchPanel;
