/**
 * Created by DIMOS on 01.04.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import TodoFilterForm from '../forms/TodoFilterForm';
import TodoInputForm from '../forms/TodoInputForm';
import TodoItem from './TodoItem';

const TodoFilter = (props) => (
    <TodoFilterForm {...props}/>
);

const TodoInput = (props) => (
    <TodoInputForm {...props}/>
);

const TodoList = ({ todoItems, currentTodo, actions }) => (
    <Table striped bordered condensed responsive hover style={{backgroundColor: 'white'}}>
        <thead>
            <tr>
                <th>#</th>
                <th>Completed</th>
                <th>Priority</th>
                <th>Task</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <TodoFilter actions={actions}/>
            {
                todoItems.map((todoItem, index) => (
                    todoItem.id === currentTodo ?
                        <TodoInput key={todoItem.id} todoItem={todoItem} actions={actions}/> :
                        <TodoItem key={todoItem.id} todoItem={{...todoItem, index: index + 1}} actions={actions}/>
                ))
            }
            <TodoInput actions={actions}/>
        </tbody>
    </Table>
);

TodoList.propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        completed: PropTypes.bool.isRequired,
        priority: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    currentTodo: PropTypes.number.isRequired,
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired
};

export default TodoList;