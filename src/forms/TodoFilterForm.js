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
import { PRIORITY_FILTERS, TOGGLE_FILTERS } from '../constants';
import map from 'lodash/map';

class TodoFilterForm extends PureComponent {
    render() {
        const { actions } = this.props;

        return (
            <tr>
                <td className="vertical-middle">
                    <Glyphicon glyph="filter"/>
                </td>
                <td>
                    <Field name="toggleFilter" label="Completed"
                           componentClass="select" component={TableField}
                           onChange={(event, newValue, previousValue) => actions.setToggleFilter(newValue)}>
                        {
                            map(TOGGLE_FILTERS, (value, key) =>
                                <option key={`toggleFilter-${key}`} value={value}>{value}</option>)
                        }
                    </Field>
                </td>
                <td>
                    <Field name="priorityFilter" label="Priority"
                           componentClass="select" component={TableField}
                           onChange={(event, newValue, previousValue) => actions.setPriorityFilter(newValue)}>
                        {
                            map(PRIORITY_FILTERS, (value, key) =>
                                <option key={`priorityFilter-${key}`} value={value}>{value}</option>)
                        }
                    </Field>
                </td>
                <td>
                </td>
                <td className="vertical-middle">
                    <FormGroup className="no-margin-bottom">
                        <Button type="button" bsSize="xsmall"
                                onClick={actions.resetFilters}>
                            <Glyphicon glyph="filter"/>
                            {' Reset'}
                        </Button>
                    </FormGroup>
                </td>
            </tr>
        );
    }
}

TodoFilterForm.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired
};

TodoFilterForm = reduxForm()(TodoFilterForm);

const mapStateToProps = (state, ownProps) => ({
    form: 'filter',
    initialValues: state.filter,
    enableReinitialize: true,
    touchOnChange: true
});

export default connect(
    mapStateToProps
)(TodoFilterForm);