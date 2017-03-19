import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/auth';
import MenuBar from '../components/nav/MenuBar';
import Routing from './Routing';
import './App.css';

const App = (props) => (
    <div className="App">
        <MenuBar {...{...props.auth, actions: props.actions }}/>
        <Routing/>
    </div>
);

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);