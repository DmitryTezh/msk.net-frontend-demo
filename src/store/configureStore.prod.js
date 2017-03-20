/**
 * Created by DIMOS on 18.03.2017.
 */
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import fetchApi from '../middlewares/fetchApi';

const configureStore = (history, preloadedState) => {
    const routerApi = routerMiddleware(history);
    const store = createStore(
        reducers,
        preloadedState,
        applyMiddleware(routerApi, thunk, fetchApi)
    );

    return store;
};

export default configureStore;