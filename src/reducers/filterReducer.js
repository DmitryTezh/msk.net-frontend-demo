/**
 * Created by tezhdmi on 22/05/17.
 */
import { PRIORITY_FILTERS, TOGGLE_FILTERS, FILTER_ACTIONS } from '../constants';
import { createReducer } from './helpers';

const initialState = {
    priorityFilter: PRIORITY_FILTERS.SHOW_ALL,
    toggleFilter: TOGGLE_FILTERS.SHOW_ALL
};

const setPriorityFilter = (state, action) => ({
    ...state,
    priorityFilter: action.priorityFilter
});

const setToggleFilter = (state, action) => ({
    ...state,
    toggleFilter: action.toggleFilter
});

const resetFilters = (state, action) => initialState;

const filterReducer = createReducer(initialState, {
    [FILTER_ACTIONS.SET_PRIORITY_FILTER] : setPriorityFilter,
    [FILTER_ACTIONS.SET_TOGGLE_FILTER] : setToggleFilter,
    [FILTER_ACTIONS.RESET_FILTERS] : resetFilters
});

export default filterReducer;