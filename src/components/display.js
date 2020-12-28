import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Cityscape from './cityscape';
import displayStyles from './display.module.css';

export default function Display() {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "ketupat-car.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <div className={displayStyles.container}>
            <Cityscape />
            <Img
                fluid={data.file.childImageSharp.fluid}
                alt="Driving Ketupat"
                className={displayStyles.car}
                style={{ position: 'absolute' }}
            />
        </div>
    );
}
