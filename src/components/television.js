import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import televisionStyles from './television.module.css';

export default function Television({ children }) {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "television.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <div className={televisionStyles.container}>
            <div className={televisionStyles.children__wrapper}>{children}</div>
            <Img
                fluid={data.file.childImageSharp.fluid}
                alt="A Television frame"
                className={televisionStyles.frame}
            />
        </div>
    );
}
