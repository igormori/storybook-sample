import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import './alerts.css';

/**
 * Alerts components documentation
 */

export const Alerts = ({
    type,
    message,
    ...props
}) => {



    return (
        <>
            <Alert severity={type} {...props}>{message}</Alert>
        </>
    );
};

Alerts.propTypes = {
    /**
     * Enter the alert message:
     */
    message: PropTypes.string.isRequired,
    /**
     * Enter the alert type:
     */
    type: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired,
};

Alerts.defaultProps = {
    message: 'This is an error alert sample',
    type: 'error',
};
