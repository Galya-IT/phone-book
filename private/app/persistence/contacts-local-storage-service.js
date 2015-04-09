/**
 * Created by Galya Bogdanova on 01-Apr-15.
 */

"use strict";

var CommonUtils = require('./../utils/common-utils');
var LocalStorageUtils = require('./../utils/local-storage-utils');

var ContactsLocalStorageService = (function() {

    var isEmpty = CommonUtils.isEmpty;

    var getAll = function() {
        return LocalStorageUtils.getAllJson();
    };

    var customIndexOf = function(value1, value2) {
        return value1.indexOf(value2);
    };

    var customIndexOfIgnoreCase = function(value1, value2) {
        return value1.toLowerCase().indexOf(value2.toLowerCase());
    };

    var equalsIgnoreCase = function(value1, value2) {
        return value1.toLowerCase() === value2.toLowerCase();
    };

    var getByPhone = function(criteriaPhone) {
        return LocalStorageUtils.getJson(criteriaPhone);
    };

    var getByCriteria = function (criteriaPhone, criteriaName, criteriaLocation, criteriaGender, criteriaSign, isIgnoreCase) {
        var indexOf = (isIgnoreCase) ? customIndexOfIgnoreCase : customIndexOf;

        var contacts = [];

        var allContacts = getAll();

        for (var index in allContacts) {
            var contact = allContacts[index];

            if (!isEmpty(criteriaPhone)) {
                if (indexOf(contact.phone, criteriaPhone) < 0) {
                    continue;
                }
            }
            if (!isEmpty(criteriaName)) {
                if (indexOf(contact.name, criteriaName) < 0) {
                    continue;
                }
            }
            if (!isEmpty(criteriaLocation)) {
                if (indexOf(contact.location, criteriaLocation) < 0) {
                    continue;
                }
            }
            if (!isEmpty(criteriaGender)) {
                if (!equalsIgnoreCase(contact.gender, criteriaGender)) {
                    continue;
                }
            }
            if (!isEmpty(criteriaSign)) {
                if (indexOf(contact.sign, criteriaSign) < 0) {
                    continue;
                }
            }
            contacts.push(contact);
        }

        return contacts;
    };

    var getAllLocations = function () {
        var locationsHashSet = [];

        var allContacts = getAll();

        for (var index in allContacts) {
            var contact = allContacts[index];
            var location = contact.location;
            if (!isEmpty(location)) {
                locationsHashSet[location] = true;
            }
        }

        return CommonUtils.jsHashSetToArray(locationsHashSet);
    };

    var deleteByPhone = function(phone) {
        LocalStorageUtils.remove(phone);
        return LocalStorageUtils.get(phone) === null;
    };

    var add = function(phone, name, location, gender, sign, notes) {
        var newContactJson = {
            phone: phone,
            name: name,
            location: location,
            gender: gender,
            sign: sign,
            notes: notes
        };
        LocalStorageUtils.setJson(phone, newContactJson);
        return LocalStorageUtils.get(phone) !== null;
    };

    var update = function(oldPhone, newPhone, name, location, gender, sign, notes) {
        deleteByPhone(oldPhone);
        return add(newPhone, name, location, gender, sign, notes);
    };

    return {
        getAllContacts: getAll,
        getByCriteria: getByCriteria,
        getByPhone: getByPhone,
        getAllLocations: getAllLocations,
        deleteByPhone: deleteByPhone,
        add: add,
        update: update
    }
}());

module.exports = ContactsLocalStorageService;