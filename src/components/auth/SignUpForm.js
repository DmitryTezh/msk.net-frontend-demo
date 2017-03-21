/**
 * Created by DIMOS on 18.03.2017.
 */
import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Col, Glyphicon, Button } from 'react-bootstrap';

const validate = values => {
    const errors = {};

    if (!values.email || !values.email.trim()) {
        errors.email = 'Email address required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.nickName || !values.nickName.trim()) {
        errors.nickName = 'Nick name required';
    }

    if (!values.password || !values.password.trim()) {
        errors.password = 'Password required';
    }
    if (!values.confirmPassword || !values.confirmPassword.trim()) {
        errors.confirmPassword = 'Password should be confirmed';
    }
    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Password not matched';
    }

    return errors;
};

const warn = values => {
    const warnings = {};

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

const renderField = ({ input, name, label, type, meta: { touched, error, warning } }) => (
    <FormGroup controlId={name} validationState={getValidationState(touched, error, warning)}>
        <Col componentClass={ControlLabel} sm={2}>
           <Glyphicon glyph="asterisk" className="text-danger"/>{' '}{label}
        </Col>
        <Col sm={4}>
            <FormControl {...input} placeholder={label} type={type} />
            <FormControl.Feedback/>
        </Col>
        <Col componentClass={HelpBlock} sm={2}>
            {touched && (error || warning)}
        </Col>
    </FormGroup>
);

const SignUpForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <Form horizontal onSubmit={handleSubmit} className="container">
            <Field name="email" type="email" component={renderField} label="Email"/>
            <Field name="nickName" type="text" component={renderField} label="Nick name"/>
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
    validate,
    warn
})(SignUpForm);