import React, { cloneElement, useState } from 'react';
import { element } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import televisionStyles from './television.module.css';

Television.propTypes = {
    children: element,
};
const max = 2;
const min = 1;

const countNext = (count) => {
    if (count < max) return count + 1;
    return min;
};

const countPrev = (count) => {
    if (count > min) return count - 1;
    return max;
};

const countRandom = (count) => {
    const nextCount = Math.floor(Math.random() * (max - min + 1)) + min;
    if (nextCount === count) return countNext(count);
    return nextCount;
};

function Television({ children }) {
    const [landscape, setLandscape] = useState(1);
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
            <div
                className={`${televisionStyles.children__wrapper} ${televisionStyles.evening}`}
            >
                {cloneElement(children, { sequence: landscape })}
            </div>
            <Img
                fluid={data.file.childImageSharp.fluid}
                alt="A Television frame"
                className={televisionStyles.frame}
            />
            <div className={televisionStyles.button__group}>
                <button onClick={() => setLandscape(countPrev(landscape))}>
                    Prev
                </button>
                <button onClick={() => setLandscape(countRandom(landscape))}>
                    Shuffle
                </button>
                <button onClick={() => setLandscape(countNext(landscape))}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Television;
