/**
 * Created by DIMOS on 18.03.2017.
 */
import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { Col, Glyphicon, Button } from 'react-bootstrap';
import HelpPopover from '../common/HelpPopover';

const validate = values => {
    const errors = {};

    if (!values.email || !values.email.trim()) {
        errors.email = 'Email address required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.nickName || !values.nickName.trim()) {
        errors.nickName = 'Nick name required';
    } else if (values.nickName.trim().length < 5) {
        errors.nickName = 'Nick name should be at least 5 chars';
    }

    if (!values.password || !values.password.trim()) {
        errors.password = 'Password required';
    } else if (values.password.trim().length < 8) {
        errors.password = 'Password should be at least 8 chars';
    }

    if (!values.confirmPassword || !values.confirmPassword.trim()) {
        errors.confirmPassword = 'Password should be confirmed';
    }
    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Password not matched';
    }

    return errors;
};

const warn = values => {
    const warnings = {};

    // eslint-disable-next-line
    if (!/^(?=^[!@#$%\^&*()_\-+=\[{\]};:<>|\./?a-zA-Z\d]{8,}$)(?=([!@#$%\^&*()_\-+=\[{\]};:<>|\./?a-zA-Z\d]*\W+){1,})[!@#$%\^&*()_\-+=\[{\]};:<>|\./?a-zA-Z\d]*$$/i.test(values.password)) {
        warnings.password = 'Weak password';
    }

    return warnings;
};

const getValidationState = (touched, error, warning) => {
    if (touched && error) {
        return "error";
    }
    if (touched && warning) {
        return "warning";
    }
    if (touched) {
        return "success";
    }
    return null;
};

const renderField = ({ input, name, label, type, help, meta: { touched, error, warning } }) => (
    <FormGroup controlId={name} validationState={getValidationState(touched, error, warning)}>
        <Col componentClass={ControlLabel} sm={2}>
           <Glyphicon glyph="asterisk" className="text-danger"/>{' '}{label}
        </Col>
        <Col sm={4}>
            <FormControl {...input} placeholder={label} type={type}/>
            <FormControl.Feedback/>
        </Col>
        <Col componentClass={HelpBlock} sm={4}>
            {help && <HelpPopover title={label} text={help}/>}
            {touched && (error || warning)}
        </Col>
    </FormGroup>
);

const SignUpForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <Form horizontal onSubmit={handleSubmit}>
            <Field name="email" type="email" component={renderField} label="Email"/>
            <Field name="nickName" type="text" component={renderField} label="Nick name"
                   help="This is your nick name, it should at least 5 chars."/>
            <Field name="password" type="password" component={renderField} label="Password"/>
            <Field name="confirmPassword" type="password" component={renderField} label="Confirm password"/>
            <FormGroup>
                <Col smOffset={2} sm={4}>
                    <Button type="submit" disabled={submitting} bsStyle="primary">Submit</Button>
                    {' '}
                    <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear</Button>
                </Col>
            </FormGroup>
        </Form>
    );
};

export default reduxForm({
    form: 'signUp',
    touchOnChange: true,
    validate,
    warn
})(SignUpForm);