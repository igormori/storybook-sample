import React from 'react';
import PropTypes from 'prop-types';
import './textField.css';

/**
 * TextField components documentation
 */
export const TextField = ({
    label,
    error,
    errorLabel,
    onChange,
    ...props
}) => {


    return (
        <>
            <label for={props.id} className="textField-label">{label}</label>
            <input
                type="text"
                className={`textField ${error && "textField--error"}`}
                onChange={onChange}
                {...props}
            />
            {error && (
                <span className="textField-label--error">{errorLabel}</span>
            )}
        </>

    );
};

TextField.propTypes = {
    /**
     * Enter the Text field label:
     */
    label: PropTypes.string.isRequired,
    /**
     * Select the textfield state:
     */
    error: PropTypes.bool,
    /**
     * Select the textfield error label:
     */
    errorLabel: PropTypes.string,
    /**
     * Select the textfield disabled state:
     */
    disabled: PropTypes.bool,
    /**
     * Get the textfield event:
     */
    onChange: PropTypes.func,
};

TextField.defaultProps = {
    label: 'Sample label*',
    error: false,
    errorLabel: 'Sample error',
    onChange: undefined,
    disabled: false
};
