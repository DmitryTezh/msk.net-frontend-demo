/**
 * Created by DIMOS on 07.05.2017.
 */
import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Radio, Checkbox, HelpBlock, Glyphicon } from 'react-bootstrap';
import { getValidationState, FieldControl } from './helpers';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';

const TableField = ({
    input, name, label, help, type, componentClass, children,
    meta: { touched, error, warning } = {}, required, showFeedback, inputGroupAddon
}) => {
    const alert = touched && (error || warning);
    return (
        <FormGroup controlId={name} validationState={getValidationState(required || input.value, touched, error, warning)} style={{marginBottom: 0}}>
            <FieldControl {...{ input, label, help, type, componentClass, inputGroupAddon }}>
                {children}
            </FieldControl>
            { showFeedback && <FormControl.Feedback style={(children && {right: 20})}/> }
            { (alert || help) && <HelpBlock className="no-margin-bottom">{alert || help}</HelpBlock> }
        </FormGroup>
    )
};

TableField.DateTimePicker = ({
    input, attrs = {}, name, label, help,
    meta: { touched, error, warning } = {},
    required, showFeedback
}) => {
    const { value } = input;
    const {
        time = false,
        format = (time ? 'DD MMM YYYY HH:mm' : 'DD MMM YYYY')
    } = attrs;
    const alert = touched && (error || warning);

    return (
        <FormGroup controlId={name} validationState={getValidationState(required || value, touched, error, warning)}>
            <DateTimePicker {...input} {...attrs} placeholder={label}
                            format={format} time={time}
                            value={!value ? null : moment(value, format).toDate()}/>
            { showFeedback && <FormControl.Feedback style={{right: time ? 60 : 30}}/> }
            { (alert || help) && <HelpBlock className="no-margin-bottom">{alert || help}</HelpBlock> }
        </FormGroup>
    )
};

TableField.RadioGroup = ({
    input, name, help, options,
    meta: { touched, error, warning } = {}, required
}) => {
    const alert = touched && (error || warning);
    return (
        <FormGroup controlId={name} validationState={getValidationState(required || input.value, touched, error, warning)}>
            <div>
                {
                    options.map(option =>
                        <Radio key={`name-${option.value}`} name={name} {...input}
                               value={option.value} checked={option.value === input.value} inline>
                            {option.label}
                        </Radio>
                    )
                }
            </div>
            <HelpBlock className="no-margin-bottom">{alert || help}</HelpBlock>
        </FormGroup>
    )
};

TableField.CheckBox = ({
    input, name, label,
    meta: { touched, error, warning } = {}, required
}) => (
    <FormGroup controlId={name} validationState={getValidationState(required || input.value, touched, error, warning)}>
        <Checkbox name={name} {...input} inline>{label}</Checkbox>
    </FormGroup>
);

TableField.Static = ({ name, text, icon }) => (
    <FormGroup controlId={name}>
        {
            icon && <Glyphicon glyph={icon}/>
        }
        {' '}
        <FormControl.Static>{text}</FormControl.Static>
    </FormGroup>
);

export default TableField;