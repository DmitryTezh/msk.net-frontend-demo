/**
 * Created by DIMOS on 18.03.2017.
 */
import React, { PropTypes } from 'react';
import { NavItem, NavIndex } from './NavItem';
import { Nav, Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
//import logo from '../../logo.svg';

const SignInForm = () => (
    <Navbar.Form pullRight>
        <FormGroup bsSize="small">
            <FormControl type="text" placeholder="Email"/>
            {' '}
            <FormControl type="text" placeholder="Password"/>
            {' '}
            <Button type="submit" bsStyle="primary">Sign In</Button>
        </FormGroup>
    </Navbar.Form>
);

const SignInUser = (user) => (
    <Nav pullRight>
        <Navbar.Text>Wellcome, {user.nickname}!</Navbar.Text>
        {' '}
        <NavItem to="/signout">Sign Out</NavItem>
    </Nav>
);

const MenuBar = ({ isAuthenticated, user, actions }) => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                {'Guild Mastery'}
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavIndex to="/">Home</NavIndex>
                <NavItem to="/signup">Sign Up</NavItem>
            </Nav>
            { !isAuthenticated && <SignInForm/> }
            { isAuthenticated && <SignInUser user={user}/> }
        </Navbar.Collapse>
    </Navbar>
);

MenuBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired
    }),
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired
};

export default MenuBar;