/**
 * Created by DIMOS on 08.04.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from 'react-bootstrap';
import { HelpPopover } from '../popovers';

export const HelpAddon = ({ title, text }) => (
    <InputGroup.Addon>
        <HelpPopover title={title} text={text}/>
    </InputGroup.Addon>
);
HelpAddon.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};