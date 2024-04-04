import React from 'react';
import PropTypes from 'prop-types';
import './topNav.css';
import Image from 'next/image';
import Logo from '../assets/idea_theorem_logo.svg';

/**
 * TopNav components documentation
 */
export const TopNav = ({
    state,
    ...props
}) => {

    return (
        <div className="top-nav" {...props}>
            <button className="logo-button" type="button" >
                <Image src={Logo} alt="Idea Theorem logo" width={225} />
            </button>

        </div>
    );
};

TopNav.propTypes = {
    /**
     * Enter the topNav state
     */
    label: PropTypes.bool,

};

TopNav.defaultProps = {
    state: false,
};
