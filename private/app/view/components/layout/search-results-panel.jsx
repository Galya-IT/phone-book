/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var SearchResultTableRow = require('./../common/search-result-table-row.jsx');
var CommonUtils = require('./../../../utils/common-utils');

var SearchResultsPanel = React.createClass({
    render: function () {
        var noDataView = <div>No contacts.</div>;

        var tableView = <table id="search-results">
            <caption>Search Results</caption>
            <thead>
            <tr>
                <th>Phone number</th>
                <th>Name</th>
                <th>Location</th>
                <th>Gender</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {
                this.props.contacts.map(function (contact) {
                    return <SearchResultTableRow key={contact.phone} contact={contact}/>
                })
            }
            </tbody>
        </table>;

        return (CommonUtils.isEmpty(this.props.contacts)) ? noDataView : tableView;
    }
});

module.exports = SearchResultsPanel;
