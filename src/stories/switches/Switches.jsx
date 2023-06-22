import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@mui/material/Switch';
import './switches.css';

/**
 * Switches components documentation
 */

export const Switches = ({
    size,
    checked,
    handleChange,
    disabled,
    ...props
}) => {



    return (
        <>
            <Switch
                checked={checked}
                onChange={handleChange}
                size={size}
                disabled={disabled}
                {...props}
            />
        </>
    );
};

Switches.propTypes = {
    /**
     * Enter the switch size:
     */
    size: PropTypes.oneOf(['small', 'regular']),
    /**
     * Enter the switch state:
     */
    checked: PropTypes.bool,
    /**
     * Enter the switch state:
     */
    disabled: PropTypes.bool,
    /**
     * Get switch event
     */
    handleChange: PropTypes.func,
};

Switches.defaultProps = {
    size: 'regular',
    checked: false,
    disabled: false
};
