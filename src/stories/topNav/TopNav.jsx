import React from 'react';
import PropTypes from 'prop-types';
import './topNav.css';
import Logo from '../assets/idea_theorem_logo.svg';

/**
 * TopNav components documentation
 */
export const TopNav = ({
    state,
    backgroundColor,

    ...props
}) => {

    return (
        <div className="top-nav" {...props}
          style={{ backgroundColor: backgroundColor}}
        >
            <button className="logo-button" type="button" >
                <img src={Logo} alt="Idea Theorem logo" width={225} />
            </button>

        </div>
    );
};

TopNav.propTypes = {
    /**
     * Enter the topNav state
     */
    label: PropTypes.bool,
    /**
     * Enter the background color code:
    */
    backgroundColor: PropTypes.string,

};

TopNav.defaultProps = {
    state: false,
};
