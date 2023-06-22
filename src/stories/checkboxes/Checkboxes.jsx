import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import './checkboxes.css';

/**
 * Checkboxes components documentation
 */

export const Checkboxes = ({
    color,
    disabled,
    ...props
}) => {



    return (
        <>
            <Checkbox
                disabled={disabled}
                sx={{
                    color: color,
                    '&.Mui-checked': {
                        color: color,
                    },
                }}
                {...props}
            />
        </>
    );
};

Checkboxes.propTypes = {
    /**
     * Enter the checkbox color:
     */
    color: PropTypes.string,
    /**
     * Select the checkbox state:
     */
    disabled: PropTypes.bool,
};

Checkboxes.defaultProps = {
    color: '#13499f',
    disabled: false,
};
