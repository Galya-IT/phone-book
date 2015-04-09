/**
 * Created by Galya Bogdanova on 02-Apr-15.
 */

"use strict";

var CommonUtils = (function () {

    var isEmpty = function (value) {
        var isEmpty = true;

        if (value !== undefined && value !== null) {
            if (typeof value === "string") {
                if (value.trim().length > 0) {
                    isEmpty = false;
                }
            } else if (Array.isArray(value)) {
                if (value.length > 0) {
                    isEmpty = false;
                }
            } else {
                isEmpty = false;
            }
        }

        return isEmpty;
    };

    var jsHashSetToArray = function(hashSet) {
        var array = [];

        for (var key in hashSet) {
            array.push(key);
        }

        return array;
    };

    var redirectTo = function (relativeRoute) {
        document.location.href = relativeRoute;
    };

    return {
        isEmpty: isEmpty,
        jsHashSetToArray: jsHashSetToArray,
        redirectTo: redirectTo
    };
}());

module.exports = CommonUtils;