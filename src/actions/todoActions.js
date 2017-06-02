/**
 * Created by DIMOS on 25.05.2017.
 */
import { makeActionCreator } from './helpers';
import { TODO_ACTIONS, REST_API_VERBS } from '../constants';

/*
 Todo action creators
 */
export const fetchTodos = () => ({
    fetchType: TODO_ACTIONS.FETCH_TODO,
    fetchUrl: '/todo'
});

export const addTodo = (completed, priority, text) => ({
    fetchType: TODO_ACTIONS.ADD_TODO,
    fetchUrl: '/todo',
    fetchMethod: REST_API_VERBS.POST,
    payload: { completed, priority, text }
});

export const amendTodo = (id, completed, priority, text) => ({
    fetchType: TODO_ACTIONS.AMEND_TODO,
    fetchUrl: `/todo/${id}`,
    fetchMethod: REST_API_VERBS.PUT,
    payload: { id, completed, priority, text }
});

export const toggleTodo = (id) => ({
    fetchType: TODO_ACTIONS.TOGGLE_TODO,
    fetchUrl: `/todo/${id}`,
    fetchMethod: REST_API_VERBS.PATCH,
    payload: { id }
});

export const removeTodo = (id) => ({
    fetchType: TODO_ACTIONS.REMOVE_TODO,
    fetchUrl: `/todo/${id}`,
    fetchMethod: REST_API_VERBS.DELETE,
    payload: { id }
});

export const editTodo = makeActionCreator(TODO_ACTIONS.EDIT_TODO, 'id');