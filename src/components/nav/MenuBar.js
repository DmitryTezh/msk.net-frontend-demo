/**
 * Created by DIMOS on 18.03.2017.
 */
import React from 'react';
import { NavItem, NavIndex } from './NavItem';
import { Nav, Navbar, Glyphicon } from 'react-bootstrap';
import { FormGroup, FormControl, Col } from 'react-bootstrap';

const SearchForm = (props) => (
    <Navbar.Form>
        <FormGroup validationState="success">
            <FormControl type="text" placeholder="Search"/>
            <FormControl.Feedback>
                <Glyphicon glyph="search"/>
            </FormControl.Feedback>
        </FormGroup>
    </Navbar.Form>
);

const MenuBar = (props) => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <div className="brand-icon">
                    <h1><Glyphicon glyph="check"/> MSK.NET</h1>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavIndex to="/">Home</NavIndex>
                <NavItem to="/todo">Todo</NavItem>
            </Nav>
            <Col smHidden xsHidden>
                <Nav pullRight>
                    <SearchForm/>
                </Nav>
            </Col>
        </Navbar.Collapse>
    </Navbar>
);

export default MenuBar;