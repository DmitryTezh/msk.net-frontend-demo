/**
 * Created by DIMOS on 18.03.2017.
 */
import React from 'react';
import { Route } from 'react-router'
import HomePage from '../components/HomePage';
import SignInForm from '../forms/auth/SignInForm';
import SignUpForm from '../forms/auth/SignUpForm';
import SignOutForm from '../forms/auth/SignOutForm';

const Routing = (props) => (
    <div className="container">
        <Route exact path="/" component={HomePage}/>
        <Route path="/signin" component={SignInForm}/>
        <Route path="/signup" component={SignUpForm}/>
        <Route path="/signout" component={SignOutForm}/>
    </div>
);

export default Routing;