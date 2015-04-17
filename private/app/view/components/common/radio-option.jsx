/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var RadioOption = React.createClass({
    getInitialState: function () {
        return {isSelected: this.props.isSelected};
    },
    handleChange: function () {
        this.setState({isSelected: this.refs.input.getDOMNode().checked});
    },
    render: function () {
        return <input ref="input" type="radio" name={this.props.groupName} id={this.props.childId}
                      value={this.props.value}
                      defaultChecked={this.state.isSelected} onChange={this.handleChange}/>;
    }
});

module.exports = RadioOption;
