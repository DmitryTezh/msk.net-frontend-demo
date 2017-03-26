/**
 * Created by DIMOS on 18.03.2017.
 */
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';
import fetchApi from '../middlewares/fetchApi';

const configureStore = (history, preloadedState) => {
    const routerApi = routerMiddleware(history);
    const store = createStore(
        reducers,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(routerApi, thunk, fetchApi, createLogger()),
            persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/))
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
};

export default configureStore;