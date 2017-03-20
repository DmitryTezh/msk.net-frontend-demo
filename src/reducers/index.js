/**
 * Created by DIMOS on 18.03.2017.
 */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    router: routerReducer
});

export default reducers;