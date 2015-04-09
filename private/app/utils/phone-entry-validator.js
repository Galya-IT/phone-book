/**
 * Created by Galya Bogdanova on 01-Apr-15.
 */

"use strict";

var PhoneEntryValidator = (function () {
    var MAX_NOTES_CHARS = 500;
    var MAX_LOCATON_CHARS = 30;
    var MAX_NAME_CHARS = 30;
    var PHONE_PATTERN = "^(\\x2B|0)([0-9]{5,12})$";

    var phone = function (phoneNumber) {
        var PHONE_PATTERN = new RegExp("^(\\x2B|0)([0-9]{5,12})$");
        return PHONE_PATTERN.test(phoneNumber.trim());
    };

    var name = function (name) {
        return name.trim().length <= MAX_NAME_CHARS;
    };

    var location = function (location) {
        return location.trim().length <= MAX_LOCATON_CHARS;
    };

    var notes = function (notes) {
        return notes.trim().length <= MAX_NOTES_CHARS;
    };

    return {
        phone: phone,
        name: name,
        location: location,
        notes: notes,
        MAX_NOTES_CHARS: MAX_NOTES_CHARS,
        MAX_LOCATON_CHARS: MAX_LOCATON_CHARS,
        MAX_NAME_CHARS:MAX_NAME_CHARS,
        PHONE_PATTERN: PHONE_PATTERN
    };
}());

module.exports = PhoneEntryValidator;