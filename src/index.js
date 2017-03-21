import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import App from './containers/App';
//import './index.css';

const history = createHistory();
const store = configureStore(history);

render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
