import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import displayStyles from './display.module.css';

export default function Display(){
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "color-bars.jpg" }) {
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
            <Img
                fluid={{
                    ...data.file.childImageSharp.fluid,
                    aspectRatio: 400 / 300,
                }}
                alt="Color Bars"
                className={displayStyles.bars}
            />
            <div className={displayStyles.announcement}>Work In Progress</div>
        </div>
    );
}
