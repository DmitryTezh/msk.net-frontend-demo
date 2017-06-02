/**
 * Created by DIMOS on 07.05.2017.
 */
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { HelpAddon } from '../addons';

export const getValidationState = (required, touched, error, warning) => {
    if (touched && error) {
        return "error";
    }
    if (touched && warning) {
        return "warning";
    }
    if (touched) {
        return required ? "success" : null;
    }
    return null;
};

export const FieldControl = ({
    input, attrs, label, help, type, componentClass, inputGroupAddon, children
}) => {
    const control =
        <FormControl {...input} {...attrs} placeholder={label} type={type} componentClass={componentClass}>
            {children}
        </FormControl>;
    return (
        inputGroupAddon
            ? <InputGroup>{inputGroupAddon}{control}{help && <HelpAddon title={label} text={help}/>}</InputGroup>
            : <span>{control}</span>
    )
};