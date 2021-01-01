import React from 'react';
import { string, element, arrayOf } from 'prop-types';
import { Link } from 'gatsby';
import containerStyles from './container.module.css';
import { Helmet } from 'react-helmet';

const ListLink = ({ to, children }) => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={to}>{children}</Link>
    </li>
);

ListLink.propTypes = {
    to: string,
    children: string,
};

function Container({ children }) {
    return (
        <div className={containerStyles.container}>
            <Helmet
                htmlAttributes={{
                    lang: 'en',
                }}
            >
                <meta charSet="utf-8" />
                <title>Ketupat Animated</title>
                <link
                    rel="canonical"
                    href="https://ketupat-animated.netlify.app/"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Blinker"
                    rel="stylesheet"
                />
            </Helmet>
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
    children: arrayOf(element),
};

export default Container;
