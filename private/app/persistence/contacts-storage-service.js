/**
 * Created by Galya Bogdanova on 30-Mar-15.
 */

"use strict";

var ContactsLocalStorageService = require('./contacts-local-storage-service.js');

var ContactsStorageService = (function () {

    // TODO: using some kind of contract - interface ContactsStorage
    var storage = ContactsLocalStorageService;

    var listeners = [];

    var fireEvent = function () {
        for (var index in listeners) {
            listeners[index].handleDataChanges();
        }
    };

    var getAll = function () {
        return storage.getAllContacts();
    };

    var getByPhone = function (criteriaPhone) {
        return storage.getByPhone(criteriaPhone);
    };

    var getByCriteria = function (criteriaPhone, criteriaName, criteriaLocation, criteriaGender, criteriaSign, isIgnoreCase) {
        return storage.getByCriteria(criteriaPhone, criteriaName, criteriaLocation, criteriaGender, criteriaSign, isIgnoreCase);
    };

    var getAllLocations = function () {
        return storage.getAllLocations();
    };

    var deleteByPhone = function(phone) {
        var isSuccessful = storage.deleteByPhone(phone);
        if (isSuccessful) {
            fireEvent();
        }
        return isSuccessful;
    };

    var add = function(phone, name, location, gender, sign, notes) {
        var isSuccessful = storage.add(phone, name, location, gender, sign, notes);
        if (isSuccessful) {
            fireEvent();
        }
        return isSuccessful;
    };

    var update = function(oldPhone, newPhone, name, location, gender, sign, notes) {
        var isSuccessful = storage.update(oldPhone, newPhone, name, location, gender, sign, notes);
        if (isSuccessful) {
            fireEvent();
        }
        return isSuccessful;
    };

    var registerListener = function(listener) {
        if (typeof listener.handleDataChanges === 'function') {
            listeners.push(listener);
        } else {
            throw new Error ('Listener for changes in data storage should have the "handleDataChanges" method.');
        }
    };

    var unregisterListener = function(listener) {
        var index = listeners.indexOf(listener);
        listeners.splice(index, 1);
    };

    return {
        getAll: getAll,
        get: getByCriteria,
        getAllLocations: getAllLocations,
        getByPhone: getByPhone,
        deleteByPhone: deleteByPhone,
        add: add,
        update: update,
        registerListener: registerListener,
        unregisterListener: unregisterListener
    };
}());

module.exports = ContactsStorageService;