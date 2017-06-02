/**
 * Created by DIMOS on 02.04.2017.
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { FormGroup, Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { TableField } from '../components/forms';
import { requiredValidator } from './validators';
import { PRIORITIES } from '../constants';
import map from 'lodash/map';

class TodoInputForm extends PureComponent {
    handleSubmit(values) {
        const { todoItem, reset, actions } = this.props;
        if (todoItem) {
            return actions.amendTodo(todoItem.id, values.completed || false, values.priority, values.text);
        }
        else {
            return actions.addTodo(values.completed || false, values.priority, values.text)
                .then(result => {
                    if (!result.error) {
                        reset();
                    }
                })
        }
    }

    handleReset() {
        const { todoItem, reset, actions } = this.props;
        if (todoItem) {
            actions.editTodo(0);
        }
        else {
            reset();
        }
    }

    render() {
        const { handleSubmit, pristine, submitting, invalid, todoItem } = this.props;
        return (
            <tr>
                <td className="vertical-middle">
                    <Glyphicon glyph={todoItem ? 'pencil' : 'plus'}/>
                </td>
                <td>
                    <Field name="completed" component={TableField.CheckBox}
                           label="Completed"/>
                </td>
                <td>
                    <Field name="priority" label="Priority" componentClass="select" component={TableField}
                           validate={requiredValidator('Choose todo priority')} showFeedback>
                        {
                            map(PRIORITIES, (value, key) =>
                                <option key={`priority-${key}`} value={value}>{value !== '' ? key : value}</option>)
                        }
                    </Field>
                </td>
                <td>
                    <Field name="text" label="Type what you should do" type="text" component={TableField}
                           validate={requiredValidator('Type todo text')} showFeedback/>
                </td>
                <td className="vertical-middle">
                    <FormGroup className="no-margin-bottom">
                        <Button type="button" disabled={submitting || invalid} bsStyle="primary" bsSize="xsmall"
                                onClick={handleSubmit(this.handleSubmit.bind(this))}>
                            <Glyphicon glyph="ok"/>
                            {' '}
                            {todoItem ? 'Save' : 'Add'}
                        </Button>
                        {' '}
                        <Button type="button" disabled={(pristine && !todoItem) || submitting} bsSize="xsmall"
                                onClick={this.handleReset.bind(this)}>
                            <Glyphicon glyph="remove"/>
                            {' Cancel'}
                        </Button>
                    </FormGroup>
                </td>
            </tr>
        );
    }
}

TodoInputForm.propTypes = {
    todoItem: PropTypes.shape({
        id: PropTypes.number,
        completed: PropTypes.bool.isRequired,
        priority: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    }),
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired
};

TodoInputForm = reduxForm()(TodoInputForm);

const mapStateToProps = (state, ownProps) => ({
    form: `todo${(ownProps.todoItem && ownProps.todoItem.id) || 0}`,
    initialValues: ownProps.todoItem,
    touchOnChange: true
});

export default connect(
    mapStateToProps
)(TodoInputForm);