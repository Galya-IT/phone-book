/**
 * Created by Galya Bogdanova on 09-Apr-15.
 */

"use strict";

var React = require('react');

var ContactsStorageService = require('./../../../persistence/contacts-local-storage-service');
var PhoneEntryValidator = require('./../../../utils/phone-entry-validator');
var CommonUtils = require('./../../../utils/common-utils');
var HomeButton = require('./../common/home-button.jsx');
var LocationField = require('./../common/loaction-field.jsx');
var GenderSelector = require('./../common/gender-selector.jsx');
var SignCombo = require('./../common/sign-combo.jsx');

var AddEditContactPage = React.createClass({
    contextTypes: {
        // Required for the router to work
        router: React.PropTypes.func.isRequired
    },
    getInitialState: function () {
        var pathName = this.context.router.getCurrentPathname().substring(1);
        var isEditPage = pathName !== 'add';
        var contact = undefined;
        if (isEditPage) {
            var tel = this.context.router.getCurrentParams().tel;
            contact = ContactsStorageService.getByPhone(tel);
        }
        return {
            isEditPage: isEditPage,
            contact: contact
        };
    },
    componentDidMount: function () {
        if (this.state.isEditPage) {
            this.refs.phone.getDOMNode().value = this.state.contact.phone;
            this.refs.name.getDOMNode().value = this.state.contact.name;
            this.refs.locationField.refs.input.getDOMNode().value = this.state.contact.location;
            this.refs.gender.getDOMNode().value = this.state.contact.gender;
            this.refs.sign.getDOMNode().value = this.state.contact.sign;
            this.refs.notes.getDOMNode().value = this.state.contact.notes;
        }
    },
    clearForm: function () {
        this.refs.phone.getDOMNode().value = "";
        this.refs.name.getDOMNode().value = "";
        this.refs.locationField.refs.input.getDOMNode().value = "";
        this.refs.gender.getDOMNode().value = this.refs.gender.props.defaultGender;
        this.refs.sign.getDOMNode().value = this.refs.sign.props.defaultSign;
        this.refs.notes.getDOMNode().value = "";
    },
    validateForm: function (phone, name, location, gender, sign, notes) {
        var isEmpty = CommonUtils.isEmpty;

        var isValidForm = true;
        var errorMsg = "";

        if (isEmpty(phone) || !PhoneEntryValidator.phone(phone)) {
            isValidForm = false;
            errorMsg = "Invalid phone!";
        }

        else if (isEmpty(name) || !PhoneEntryValidator.name(name)) {
            isValidForm = false;
            errorMsg = "Invalid name!";
        }

        else if (!isEmpty(location) && !PhoneEntryValidator.location(location)) {
            isValidForm = false;
            errorMsg = "Invalid location!";
        }

        else if (!isEmpty(notes) && !PhoneEntryValidator.notes(notes)) {
            isValidForm = false;
            errorMsg = "Invalid notes!";
        }

        if (!isEmpty(errorMsg)) {
            alert(errorMsg);
        }
        return isValidForm;
    },
    save: function () {
        var phone = this.refs.phone.getDOMNode().value.trim();
        var name = this.refs.name.getDOMNode().value.trim();
        var location = this.refs.locationField.refs.input.getDOMNode().value.trim();
        var gender = this.refs.gender.getDOMNode().value.trim();
        var sign = this.refs.sign.getDOMNode().value.trim();
        var notes = this.refs.notes.getDOMNode().value.trim();

        if (this.validateForm(phone, name, location, gender, sign, notes)) {
            if (this.state.isEditPage) {
                ContactsStorageService.update(this.state.contact.phone, phone, name, location, gender, sign, notes);
            } else {
                ContactsStorageService.add(phone, name, location, gender, sign, notes);
            }
            alert('Successful save!');
            // this.clearForm();
            CommonUtils.redirectTo('#/');
        } else {
            alert('Contact not saved. Please correct the errors.');
        }
    },
    render: function () {
        var pageTitle = this.state.isEditPage ? ('Edit contact ' + this.state.contact.phone) : 'Add contact';
        return (
            <section id="main-section-wrapper">
                <header id="add-edit-heading">
                    <h4>{pageTitle}</h4>
                </header>
                <HomeButton />

                <form id="add-edit-form">
                    <input ref="phone" id="input-phone" pattern={PhoneEntryValidator.PHONE_PATTERN} type="tel"
                           placeholder="Phone"/>
                    <input ref="name" id="input-name" maxLength={PhoneEntryValidator.MAX_NAME_CHARS} type="text"
                           placeholder="Name"/>
                    <LocationField ref="locationField" maxLength={PhoneEntryValidator.MAX_LOCATON_CHARS}/>
                    <GenderSelector ref="gender"/>
                    <SignCombo ref="sign"/>
                        <textarea ref="notes" id="input-notes" maxLength={PhoneEntryValidator.MAX_NOTES_CHARS}
                                  placeholder="Notes"></textarea>
                    <button id="btn-save" type="button" onClick={this.save}>Save</button>
                </form>
            </section>
        );
    }
});

module.exports = AddEditContactPage;
