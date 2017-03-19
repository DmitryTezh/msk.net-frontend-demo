import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './store/configureStore';
import App from './containers/App';
import './index.css';

const store = configureStore();

render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
