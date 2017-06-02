/**
 * Created by DIMOS on 25.05.2017.
 */
import { makeActionCreator } from './helpers';
import { FILTER_ACTIONS } from '../constants';

/*
    Filter action creators
 */
export const setPriorityFilter = makeActionCreator(FILTER_ACTIONS.SET_PRIORITY_FILTER, 'priorityFilter');
export const setToggleFilter = makeActionCreator(FILTER_ACTIONS.SET_TOGGLE_FILTER, 'toggleFilter');
export const resetFilters = makeActionCreator(FILTER_ACTIONS.RESET_FILTERS);