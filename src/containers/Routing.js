/**
 * Created by DIMOS on 18.03.2017.
 */
import React from 'react';
import { Route } from 'react-router'
import HomePage from '../components/HomePage';
import SignInForm from '../components/auth/SignInForm';
import SignUpForm from '../components/auth/SignUpForm';
import SignOutForm from '../components/auth/SignOutForm';

const Routing = (props) => (
    <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/signin" component={SignInForm}/>
        <Route path="/signup" component={SignUpForm}/>
        <Route path="/signout" component={SignOutForm}/>
    </div>
);

export default Routing;