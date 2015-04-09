/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var SignCombo = React.createClass({
    getDefaultProps: function () {
        var ZODIAC_SIGNS = [
            'Aquarius',
            'Pisces',
            'Aries',
            'Taurus',
            'Gemini',
            'Cancer',
            'Leo',
            'Virgo',
            'Libra',
            'Scorpio',
            'Sagittarius',
            'Capricorn'
        ];
        return {
            ZODIAC_SIGNS: ZODIAC_SIGNS,
            defaultSign: 'Zodiac Sign'
        }
    },
    handleChange: function (event) {
        if (this.props.onChange) {
            this.props.onChange(this.props.defaultSign, event.target.value);
        }
    },
    render: function () {
        return (
            <select id="sign-combo" onChange={this.handleChange}>
                <option value={this.props.defaultSign}>{this.props.defaultSign}</option>
                {
                    this.props.ZODIAC_SIGNS.map(function (sign) {
                        return <option key={sign} value={sign}>{sign}</option>
                    })
                }
            </select>
        );
    }
});

module.exports = SignCombo;
