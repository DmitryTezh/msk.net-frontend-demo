/**
 * Created by DIMOS on 18.03.2017.
 */

/*
    Rest API verbs
 */
export const REST_API_VERBS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    PATCH: 'patch'
};

/*
    Rest content types
 */
export const REST_CONTENT_TYPES = {
    JSON: 'application/json',
    FORM: 'application/x-www-form-urlencoded'
};

/*
    Rest response types
 */
export const REST_RESPONSE_TYPES = {
    JSON: 'json',
    TEXT: 'text',
    BLOB: 'blob',
    DOCUMENT: 'document',
    STREAM: 'stream'
};

/*
    Priority enums
 */
export const PRIORITIES = {
    NONE: '',
    HIGH: 1,
    MEDIUM: 2,
    LOW: 3
};

/*
    Priority filters
 */
export const PRIORITY_FILTERS = {
    SHOW_ALL: 'SHOW ALL',
    SHOW_HIGH: 'SHOW HIGH',
    SHOW_MEDIUM: 'SHOW MEDIUM',
    SHOW_LOW: 'SHOW LOW'
};

/*
    Toggle filters
 */
export const TOGGLE_FILTERS = {
    SHOW_ALL: 'SHOW ALL',
    SHOW_ACTIVE: 'SHOW ACTIVE',
    SHOW_COMPLETED: 'SHOW COMPLETED'
};

/*
    Todo action types
 */
export const TODO_ACTIONS = {
    FETCH_TODO: 'FETCH_TODO',
    ADD_TODO: 'ADD_TODO',
    AMEND_TODO: 'AMEND_TODO',
    EDIT_TODO: 'SELECT_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    REMOVE_TODO: 'REMOVE_TODO'
};

/*
    Filter action types
 */
export const FILTER_ACTIONS = {
    SET_PRIORITY_FILTER: 'SET_PRIORITY_FILTER',
    SET_TOGGLE_FILTER: 'SET_TOGGLE_FILTER',
    RESET_FILTERS: 'RESET_FILTERS'
};