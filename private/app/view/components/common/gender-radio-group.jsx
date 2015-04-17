/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var RadioOption = require('./radio-option.jsx');

var GenderRadioGroup = React.createClass({
    getDefaultProps: function () {
        var OPTIONS = [
            'Male',
            'Female',
            'Both'
        ];
        return {
            OPTIONS: OPTIONS,
            defaultGender: OPTIONS[2]
        }
    },
    getInitialState: function () {
        return {
            chosenGender: this.props.defaultGender
        }
    },
    handleChange: function (event) {
        if (this.props.onChange) {
            this.props.onChange(this.props.defaultGender, event.target.value);
        }
    },
    render: function () {
        var chosenOption = this.state.chosenGender;
        return (
            <section id="gender-selector" onChange={this.handleChange}>
                {
                    this.props.OPTIONS.map(function (option) {
                        var isCurrentOptionSelected = (option === chosenOption);
                        return <span key={option}>
                                <label htmlFor={option}>{option}</label>
                                <RadioOption groupName="gender" childId={option} value={option} isSelected={isCurrentOptionSelected}/>
                            </span>
                    })
                }
            </section>
        );
    }
});

module.exports = GenderRadioGroup;
