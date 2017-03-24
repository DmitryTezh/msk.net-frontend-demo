/**
 * Created by DIMOS on 18.03.2017.
 */
import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { Panel, Col, Glyphicon, Button } from 'react-bootstrap';
import { requiredValidator, confirmValidator, minLengthValidator } from '../validators';
import { emailValidator, passwordValidator, matchValidator } from '../validators';
import { InputPopover } from '../../components/common/HelpPopover';

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
            { help ?
                <InputPopover title={label} text={help}>
                    <FormControl {...input} placeholder={label} type={type}/>
                </InputPopover> :
                <FormControl {...input} placeholder={label} type={type}/>
            }
            <FormControl.Feedback/>
        </Col>
        <Col componentClass={HelpBlock} sm={4}>
            {touched && (error || warning)}
        </Col>
    </FormGroup>
);

const SignUpForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <Panel header="Sign Up" bsStyle="primary">
            <Form horizontal onSubmit={handleSubmit}>
                <Field name="email" type="email" component={renderField} label="Email"
                       help="This is your email, it will be your login to portal."
                       validate={[requiredValidator, emailValidator]}/>
                <Field name="nickName" type="text" component={renderField} label="Nick name"
                       help="This is your nick name, it should be at least 5 chars."
                       validate={[requiredValidator, minLengthValidator(5)]}/>
                <Field name="password" type="password" component={renderField} label="Password"
                       help="This is your password, it should be at least 8 chars, contains digits, upper and lower letters, special symbols: !@#$%^&*()_-+=[{]};:<>|./?"
                       validate={[requiredValidator, minLengthValidator(8)]} warn={passwordValidator}/>
                <Field name="confirmPassword" type="password" component={renderField} label="Confirm password"
                       validate={[confirmValidator, matchValidator('password')]}/>
                <FormGroup>
                    <Col smOffset={2} sm={4}>
                        <Button type="submit" disabled={submitting} bsStyle="primary">Sign Up</Button>
                        {' '}
                        <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Panel>
    );
};

export default reduxForm({
    form: 'signUp',
    touchOnChange: true
})(SignUpForm);