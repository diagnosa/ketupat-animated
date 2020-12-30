import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import cityscapeStyle from './cityscape.module.css';
import { number } from 'prop-types';

Cityscape.propTypes = {
    landscape: number,
};

function Cityscape({ landscape }) {
    const {
        allFile: { edges },
    } = useStaticQuery(graphql`
        {
            allFile(filter: { relativeDirectory: { eq: "landscape" } }) {
                edges {
                    node {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `);
    const currentBackground = edges[landscape - 1];
    return (
        <div className={cityscapeStyle.container}>
            <Img
                key="landscape1"
                fluid={currentBackground.node.childImageSharp.fluid}
                alt="City Landscape"
                className={cityscapeStyle.frame}
            />
            <Img
                key="landscape2"
                fluid={currentBackground.node.childImageSharp.fluid}
                alt="City Landscape"
                className={cityscapeStyle.frame}
            />
        </div>
    );
}

export default Cityscape;
