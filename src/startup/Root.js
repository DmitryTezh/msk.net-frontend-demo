/**
 * Created by DIMOS on 17.04.2017.
 */
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

const Root = ({ store, history, children }) => (
    <Provider store={store}>
        <Router history={history}>
            {children}
        </Router>
    </Provider>
);

export default Root;