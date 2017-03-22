/**
 * Created by DIMOS on 22.03.2017.
 */
import React, { PropTypes } from 'react';
import { OverlayTrigger, Popover, Glyphicon } from 'react-bootstrap';

const popoverHoverFocus = (title, text) => (
    <Popover id="popover-trigger-hover-focus" title={title}>
        {text}
    </Popover>
);

const HelpPopover = ({ title, text} ) => (
    <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popoverHoverFocus(title, text)}>
        <Glyphicon glyph="info-sign"/>
    </OverlayTrigger>
);

HelpPopover.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default HelpPopover;