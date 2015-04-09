/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var SignCombo = require('./../common/sign-combo.jsx');

var SignSearchFilter = React.createClass({
    /**
     * Default search filter value indicates no criteria defined.
     */
    handleChange: function (defaultSign, chosenSign) {
        var filterValue = (chosenSign !== defaultSign) ? chosenSign : "";
        this.props.filter.setSignFilter(filterValue);
    },
    render: function () {
        return (
            <SignCombo onChange={this.handleChange}/>
        );
    }
});


module.exports = SignSearchFilter;
