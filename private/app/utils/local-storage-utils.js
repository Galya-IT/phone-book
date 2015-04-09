/**
 * Created by Galya Bogdanova on 01-Apr-15.
 */

"use strict";

var LocalStorageUtils = (function() {

    var isSupported = function() {
        return (typeof(Storage) !== "undefined");
    };

    var get = function(key) {
        return localStorage.getItem(key);
    };

    var set = function(key, value) {
        localStorage.setItem(key, value);
    };

    var getJson = function (key) {
        return JSON.parse(get(key));
    };

    var setJson = function (key, json) {
        set(key, JSON.stringify(json));
    };

    var remove = function(key) {
        localStorage.removeItem(key);
    };

    var getAllJson = function() {
        var jsonArray = [];
        for (var i = 0; i < localStorage.length; i++) {
            jsonArray.push(getJson(localStorage.key(i)));
        }
        return jsonArray;
    };

    return {
        isSupported: isSupported,
        get: get,
        set: set,
        setJson: setJson,
        getJson: getJson,
        getAllJson: getAllJson,
        remove: remove
    }
}());

module.exports = LocalStorageUtils;