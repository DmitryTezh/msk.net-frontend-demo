/**
 * Created by DIMOS on 04.05.2017.
 */
import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import logo from '../logo.svg';
import reactLogo from '../react.svg';
import reduxLogo from '../redux.svg';

const WelcomePage = (props) => (
    <Row>
        <Carousel>
            <Carousel.Item>
                <div className="app-header">
                    <img src={logo} alt="logo"/>
                </div>
                <Carousel.Caption>
                    <h1>Wellcome to MSK.NET meetup #10!</h1>
                    <h3>Here you will be learned how to develop with ASP.NET CORE and React.JS</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="app-header">
                    <img src={reactLogo} className="app-logo" alt="react"/>
                </div>
                <Carousel.Caption>
                    <h1>Think in React!</h1>
                    <h3>React is declarative and component-based. It mixes JavaScript expressions with standard HTML markup.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="app-header">
                    <img src={reduxLogo} className="app-logo" alt="redux"/>
                </div>
                <Carousel.Caption>
                    <h1>Use Redux!</h1>
                    <h3>Redux attempts to make state mutations more predictable.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Row>
);

export default WelcomePage;