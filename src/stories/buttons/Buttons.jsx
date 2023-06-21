import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import './buttons.css';

/**
 * Buttons components documentation
 */
export const Buttons = ({
    size,
    label,
    variant,
    backgroundColor,
    textColor,
    ...props
}) => {

    const getVariant = () => {
        if (variant === 'primary') return 'contained';
        if (variant === 'secondary') return 'outlined';
        return 'default';
    }

    return (
        <button
            variant={getVariant()}
            className={[`buttons-${variant}`, `buttons-${variant}--${size}`].join(' ')}
            size={size}
            style={{ backgroundColor: backgroundColor, color: textColor }}
            aria-label={label}
            {...props}
        >
            {label}
        </button>
    );
};

Buttons.propTypes = {
    /**
     * Select the button size:
     */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
    /**
     * Enter the button label:
     */
    label: PropTypes.string.isRequired,
    /**
     * Enter the button style type:
     */
    variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
    /**
     * Required to define the button variant
     */
    onClick: PropTypes.func,
    /**
     * Enter the button background color:
     */
    backgroundColor: PropTypes.string,
    /**
    * Enter the button text color:
    */
    textColor: PropTypes.string,
};

Buttons.defaultProps = {
    size: 'small',
    variant: 'primary',
    label: 'buttons',
    onClick: undefined,
};
