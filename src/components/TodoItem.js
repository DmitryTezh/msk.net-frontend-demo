/**
 * Created by DIMOS on 25.05.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

const priorityNames = ["HIGH", "MEDIUM", "LOW"];
const priorityStyles = ["text-danger", "text-warning", "text-info"];

const PendingItem = ({ text }) => <span><strong>{text}</strong></span>;
const CompletedItem = ({ text }) => <span><del><strong>{text}</strong></del></span>;

const TodoItem = ({ todoItem, actions }) => (
    <tr className={priorityStyles[todoItem.priority-1]}
        onDoubleClick={() => actions.editTodo(todoItem.id)}>
        <td>{todoItem.index}</td>
        <td>
            <Checkbox checked={todoItem.completed} inline
                      onChange={() => actions.toggleTodo(todoItem.id)}>
                {todoItem.completed
                    ? <CompletedItem text="Completed"/>
                    : <PendingItem text="Pending"/>
                }
            </Checkbox>
        </td>
        <td>
            {todoItem.completed
                ? <CompletedItem text={priorityNames[todoItem.priority-1]}/>
                : <PendingItem text={priorityNames[todoItem.priority-1]}/>
            }
        </td>
        <td>
            {todoItem.completed
                ? <CompletedItem text={todoItem.text}/>
                : <PendingItem text={todoItem.text}/>
            }
        </td>
        <td>
            <Button type="button" bsStyle="primary" bsSize="xsmall"
                    onClick={() => actions.editTodo(todoItem.id)}>
                <Glyphicon glyph="pencil"/>
                {' Edit'}
            </Button>
            {' '}
            <Button type="button" bsStyle="danger" bsSize="xsmall"
                    onClick={() => actions.removeTodo(todoItem.id)}>
                <Glyphicon glyph="remove"/>
                {' Remove'}
            </Button>
        </td>
    </tr>
);

TodoItem.propTypes = {
    todoItem: PropTypes.shape({
        id: PropTypes.number,
        index: PropTypes.number,
        completed: PropTypes.bool.isRequired,
        priority: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired
};

export default TodoItem;