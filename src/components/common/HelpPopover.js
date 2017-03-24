/**
 * Created by DIMOS on 22.03.2017.
 */
import React, { PropTypes } from 'react';
import { OverlayTrigger, Popover, Glyphicon } from 'react-bootstrap';

const renderPopover = (title, text) => (
    <Popover id={`${title}-popover-trigger`} title={title}>
        {text}
    </Popover>
);

export const IconPopover = ({ title, text} ) => (
    <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={renderPopover(title, text)}>
        <Glyphicon glyph="info-sign"/>
    </OverlayTrigger>
);
IconPopover.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export const InputPopover = ({ title, text, children} ) => (
    <OverlayTrigger trigger="focus" placement="left" overlay={renderPopover(title, text)}>
        {children}
    </OverlayTrigger>
);
InputPopover.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};