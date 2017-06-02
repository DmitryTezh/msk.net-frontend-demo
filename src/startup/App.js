import React from 'react';
import { withRouter } from 'react-router-dom';
import MenuBar from '../components/nav/MenuBar';
import AppRouting from './Routing';
import './App.css';

const AppMenu = withRouter(MenuBar);
const App = (props) => (
    <div>
        <AppMenu/>
        <AppRouting/>
    </div>
);

export default App;