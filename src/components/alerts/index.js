/**
 * Created by DIMOS on 02.04.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Glyphicon } from 'react-bootstrap';

export const getErrorMessage = (error, allErrors = false) => {
    if (error.response && error.response.data && error.response.data.errorMessage) {
        return allErrors ? JSON.stringify(error.response.data.errorMessage) :  error.response.data.errorMessage[0];
    }
    return error.message || error;
};

export const Danger = ({ error }) => (
    <Alert bsStyle="danger">
        <Glyphicon glyph="exclamation-sign"/>{' '}{getErrorMessage(error)}
    </Alert>
);
Danger.propTypes = {
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
};

export const Warning = ({ warning }) => (
    <Alert bsStyle="warning">
        <Glyphicon glyph="warning-sign"/>{' '}{warning}
    </Alert>
);
Warning.propTypes = {
    warning: PropTypes.string.isRequired
};

export const Success = ({ title }) => (
    <Alert bsStyle="success">
        <Glyphicon glyph="ok-sign"/>{' '}{title}
    </Alert>
);
Success.propTypes = {
    title: PropTypes.string.isRequired
};

export const Info = ({ title }) => (
    <Alert bsStyle="info">
        <Glyphicon glyph="info-sign"/>{' '}{title}
    </Alert>
);
Info.propTypes = {
    title: PropTypes.string.isRequired
};