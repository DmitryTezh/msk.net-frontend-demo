/**
 * Created by DIMOS on 02.04.2017.
 */
import { createSelector } from 'reselect';
import { PRIORITIES, PRIORITY_FILTERS, TOGGLE_FILTERS } from '../../constants';
import filter from 'lodash/filter';

const filterSelector = (state) => state.filter;
const todoSelector = (state) => state.todo.todosById;

const filterItem = (priorityFilter, toggleFilter, todoItem) => {
    const priorityCheck = priorityFilter === PRIORITY_FILTERS.SHOW_ALL
        || (priorityFilter === PRIORITY_FILTERS.SHOW_HIGH && todoItem.priority === PRIORITIES.HIGH )
        || (priorityFilter === PRIORITY_FILTERS.SHOW_MEDIUM && todoItem.priority === PRIORITIES.MEDIUM)
        || (priorityFilter === PRIORITY_FILTERS.SHOW_LOW && todoItem.priority === PRIORITIES.LOW);
    const toggleCheck = toggleFilter === TOGGLE_FILTERS.SHOW_ALL
        || (toggleFilter === TOGGLE_FILTERS.SHOW_ACTIVE && !todoItem.completed)
        || (toggleFilter === TOGGLE_FILTERS.SHOW_COMPLETED && todoItem.completed);
    return priorityCheck && toggleCheck;
};

export const selectTodos = createSelector(
    [filterSelector, todoSelector],
    (todoFilters, todoItems) => filter(todoItems, todoItem => filterItem(todoFilters.priorityFilter, todoFilters.toggleFilter, todoItem))
);