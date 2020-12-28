import React from 'react';
import { string, element } from 'prop-types';
import { Link } from 'gatsby';
import containerStyles from './container.module.css';

const ListLink = ({  to, children  }) => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={to}>{children}</Link>
    </li>
);

ListLink.propTypes = {
    to: string,
    children: element,
};

function Container({ children }) {
    return (
        <div className={containerStyles.container}>
            <header style={{ marginBottom: `1.5rem` }}>
                <Link
                    to="/"
                    style={{ textShadow: `none`, backgroundImage: `none` }}
                >
                    <h3 style={{ display: `inline` }}>Ketupat Animated</h3>
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
            </header>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: element,
};

export default Container;
