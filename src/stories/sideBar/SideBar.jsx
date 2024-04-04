'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";
import { usePathname } from 'next/navigation';
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
                <img
                    src="/assets/img/logo-small-bot.png"
                    alt="Idea Theorem logo"
                    className="logo"
                />
                © {new Date().getFullYear()} Copyright Idea Theorem Inc.
            </div>
        </div>
    );
};

const ItemsStructure = (props) => {
    const {
        item: { label, url, icon },
    } = props;
    const pathname = usePathname();

    const isActive = false;
    pathname.includes(label.toLowerCase());

    return (
        <Link href={url} className="link">
            <img src={icon} alt="chat icon" className="sidebar-icon" /> {label}
        </Link>
    );
};

SideBar.propTypes = {
    /**
     * Enter the topNav state
     */
    items: PropTypes.array,

};

SideBar.defaultProps = {
    items: [{
        label: "Customer list",
        url: "customer/list"

    }],
};
