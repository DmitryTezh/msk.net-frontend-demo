/**
 * Created by DIMOS on 18.03.2017.
 */
import React from 'react';
import { Switch, Route } from 'react-router';
import { Grid } from 'react-bootstrap';
import WelcomePage from '../pages/WelcomePage';
import TodoPage from '../pages/TodoPage'
import NotFoundPage from '../pages/NotFoundPage';

const Routing = (props) => (
    <Grid>
        <Switch>
            <Route exact path="/" component={WelcomePage}/>
            <Route path="/todo" component={TodoPage}/>

            <Route component={NotFoundPage}/>
        </Switch>
    </Grid>
);

export default Routing;