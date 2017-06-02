/**
 * Created by DIMOS on 18.03.2017.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import todoReducer from './todoReducer';
import filterReducer from './filterReducer';

const reducers = combineReducers({
    router: routerReducer,
    form: formReducer,

    todo: todoReducer,
    filter: filterReducer
});

export default reducers;