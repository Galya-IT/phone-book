/**
 * Created by Galya Bogdanova on 01-Apr-15.
 */

"use strict";

var ContactsStorageService = require('./persistence/contacts-storage-service.js');

var ContactsSearchFilter = (function () {
    var SearchFilter = function () {
        if (!(this instanceof SearchFilter)) {
            return new SearchFilter();
        }

        var _filteredContacts = ContactsStorageService.getAll();
        var _listeners = [];
        var _filterCriteria = {
            phone: '',
            name: '',
            location: '',
            gender: '',
            sign: ''
        };
        var _isIgnoreCase = false;

        var fireEvent = function () {
            for (var index in _listeners) {
                _listeners[index].handleFilterChanges();
            }
        };

        this.registerListener = function (listener) {
            if (typeof listener.handleFilterChanges === 'function') {
                _listeners.push(listener);
            } else {
                throw new Error('Listener for search filter changes should have the "handleFilterChanges" method.');
            }
        };

        this.unregisterListener = function (listener) {
            var index = _listeners.indexOf(listener);
            _listeners.splice(index, 1);
        };

        this.handleDataChanges = function () {
            this.resetData();
        };

        this.setIgnoreCase = function (value) {
            _isIgnoreCase = value;
        };

        this.getIgnoreCase = function () {
            return _isIgnoreCase;
        };

        this.getContacts = function () {
            return _filteredContacts;
        };

        this.setContacts = function (contacts) {
            _filteredContacts = contacts;
            fireEvent.call(this);
        };

        this.setPhoneFilter = function (phone) {
            _filterCriteria.phone = phone;
            this.resetData();
        };

        this.setNameFilter = function (name) {
            _filterCriteria.name = name;
            this.resetData();
        };

        this.setLocationFilter = function (location) {
            _filterCriteria.location = location;
            this.resetData();
        };

        this.setGenderFilter = function (gender) {
            _filterCriteria.gender = gender;
            this.resetData();
        };

        this.setSignFilter = function (sign) {
            _filterCriteria.sign = sign;
            this.resetData();
        };

        this.resetData = function () {
            this.setContacts(ContactsStorageService.get(_filterCriteria.phone, _filterCriteria.name, _filterCriteria.location, _filterCriteria.gender, _filterCriteria.sign, _isIgnoreCase));
        };

        ContactsStorageService.registerListener(this);
    };

    return SearchFilter;
}());

module.exports = ContactsSearchFilter;