import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import cityscapeStyle from './cityscape.module.css';

Cityscape.propTypes = {};

function Cityscape() {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "city2.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <div className={cityscapeStyle.container}>
            <Img
                fluid={data.file.childImageSharp.fluid}
                alt="City Landscape"
                className={cityscapeStyle.frame}
            />
            <Img
                fluid={data.file.childImageSharp.fluid}
                alt="City Landscape"
                className={cityscapeStyle.frame}
            />
        </div>
    );
}

export default Cityscape;
