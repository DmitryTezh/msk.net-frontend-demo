/**
 * Created by DIMOS on 01.04.2017.
 */
import map from 'lodash/map';
import mapValues from 'lodash/mapValues';
import keyBy from 'lodash/keyBy';
import omit from 'lodash/omit';
import { TODO_ACTIONS } from '../constants';
import { createReducer } from './helpers';
import { toRequestAction, toSuccessAction, toErrorAction } from '../actions/helpers';

const initialState = {
    todos: [],
    todosById: {},
    fetching: false,
    currentTodo: 0
};

const fetchingTodo = (state, action) => ({
    ...state,
    fetching: true,
    error: undefined
});

const notFetchedTodo = (state, action) => ({
    ...initialState,
    error: action.error
});

const fetchTodo = (state, action) => ({
    ...state,
    todos: map(action.data, item => item.id),
    todosById: keyBy(action.data, item => item.id),
    fetching: false
});

const addTodo = (state, action) => ({
    ...state,
    todos: state.todos.concat(action.data.id),
    todosById: {
        ...state.todosById,
        [action.data.id]: action.data
    }
});

const updateTodo = (state, action) => ({
    ...state,
    todosById: mapValues(state.todosById, todo => todo.id === action.data.id ? action.data : todo),
    currentTodo: 0
});

const removeTodo = (state, action) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== action.id),
    todosById: omit(state.todosById, action.id)
});

const editTodo = (state, action) => ({
    ...state,
    currentTodo: action.id
});

const requestingTodo = (state, action) => ({
    ...state,
    error: undefined
});

const failedTodo = (state, action) => ({
    ...state,
    fetching: false,
    error: action.error
});

const todoReducer = createReducer(initialState, {
    [toRequestAction(TODO_ACTIONS.FETCH_TODO)] : fetchingTodo,
    [toRequestAction(TODO_ACTIONS.ADD_TODO)] : requestingTodo,
    [toRequestAction(TODO_ACTIONS.AMEND_TODO)] : requestingTodo,
    [toRequestAction(TODO_ACTIONS.TOGGLE_TODO)] : requestingTodo,
    [toRequestAction(TODO_ACTIONS.REMOVE_TODO)] : requestingTodo,

    [toSuccessAction(TODO_ACTIONS.FETCH_TODO)] : fetchTodo,
    [toSuccessAction(TODO_ACTIONS.ADD_TODO)] : addTodo,
    [toSuccessAction(TODO_ACTIONS.AMEND_TODO)] : updateTodo,
    [toSuccessAction(TODO_ACTIONS.TOGGLE_TODO)] : updateTodo,
    [toSuccessAction(TODO_ACTIONS.REMOVE_TODO)] : removeTodo,

    [toErrorAction(TODO_ACTIONS.FETCH_TODO)] : notFetchedTodo,
    [toErrorAction(TODO_ACTIONS.ADD_TODO)] : failedTodo,
    [toErrorAction(TODO_ACTIONS.AMEND_TODO)] : failedTodo,
    [toErrorAction(TODO_ACTIONS.TOGGLE_TODO)] : failedTodo,
    [toErrorAction(TODO_ACTIONS.REMOVE_TODO)] : failedTodo,

    [TODO_ACTIONS.EDIT_TODO] : editTodo
});

export default todoReducer;