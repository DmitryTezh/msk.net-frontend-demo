/**
 * Created by DIMOS on 22.03.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Overlay, Popover, Glyphicon } from 'react-bootstrap';

const renderPopover = (title, text, style) => (
    <Popover id={`${title}-popover-trigger`} title={title}>
        <p className={style}>{text}</p>
    </Popover>
);

export const HelpPopover = ({ title, text, style }) => (
    <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={renderPopover(title, text, style)}>
        <Glyphicon glyph="info-sign"/>
    </OverlayTrigger>
);
HelpPopover.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.string
};

export const InputPopover = ({ title, text, style, children }) => (
    <OverlayTrigger trigger="focus" placement="left" overlay={renderPopover(title, text, style)}>
        {children}
    </OverlayTrigger>
);
InputPopover.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.string,
    children: PropTypes.node.isRequired
};

export const AlertPopover = (props) => (
    <Overlay {...props}>
        <Popover id={`${props.title}-popover`} title={props.title}>
            {props.children}
        </Popover>
    </Overlay>
);
AlertPopover.propTypes = {
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    target: PropTypes.object,
    placement: PropTypes.string.isRequired,
    container: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
};