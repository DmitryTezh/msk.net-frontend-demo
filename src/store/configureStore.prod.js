/**
 * Created by DIMOS on 18.03.2017.
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducers from '../reducers';
import fetchApi from '../middlewares/fetchApi';

const configureStore = preloadedState => createStore(
    reducers,
    preloadedState,
    applyMiddleware(thunk, fetchApi)
);

export default configureStore;