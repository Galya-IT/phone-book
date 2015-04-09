/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var ContactsStorageService = require('./../../../persistence/contacts-storage-service.js');
var CommonUtils = require('./../../../utils/common-utils');

var SearchResultTableRow = React.createClass({
    deleteRecord: function (event) {
        ContactsStorageService.deleteByPhone(this.props.contact.phone);
        event.preventDefault();
    },
    editRecord: function (event) {
        CommonUtils.redirectTo('#/edit/' + this.props.contact.phone);
        event.preventDefault();
    },
    render: function () {
        return (
            <tr>
                <td>{this.props.contact.phone}</td>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.location}</td>
                <td>{this.props.contact.gender}</td>
                <td>
                    <button className="edit" onClick={this.editRecord}>Edit</button>
                </td>
                <td>
                    <button className="delete" onClick={this.deleteRecord}>Delete</button>
                </td>
            </tr>
        );
    }
});

module.exports = SearchResultTableRow;
