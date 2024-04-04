'use client';
import React from 'react';
import PropTypes from 'prop-types';
import './sideBar.css';

/**
 * SideBar components documentation
 */
export const SideBar = ({
    items,
    ...props
}) => {

    return (
        <div className="sidebar" {...props}>
            <h2 className="title">
                Admin Portal
            </h2>
            {items.map((item) => {
                return <ItemsStructure item={item} key={item.label} />;
            })}
            <div className="copyright">
                © {new Date().getFullYear()} Copyright Idea Theorem Inc.
            </div>
        </div>
    );
};

const ItemsStructure = (props) => {
    const {
        item: { label, url, icon },
    } = props;

    const isActive = false;

    return (
        <a href={url} className="link">
            {icon ? <img src={icon} alt="chat icon" className="sidebar-icon" /> : <img src="/home.svg" alt="chat icon" className="sidebar-icon" />}
           {label}
        </a>
    );
};

SideBar.propTypes = {
    /**
     * Enter the topNav state
     */
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),

};

SideBar.defaultProps = {
    items: [{
        label: "Home",
        url: "/"

    }],
};
