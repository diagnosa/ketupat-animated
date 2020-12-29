import React from 'react';
import { number } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Cityscape from './cityscape';
import displayStyles from './display.module.css';

Display.propTypes = {
    sequence: number,
};

function Display({ sequence }) {
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
            <Cityscape landscape={sequence} />
            <Img
                fluid={data.file.childImageSharp.fluid}
                alt="Driving Ketupat"
                className={displayStyles.car}
                style={{ position: 'absolute' }}
            />
        </div>
    );
}

export default Display;
