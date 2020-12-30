import React, { cloneElement, useState } from 'react';
import { element } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import televisionStyles from './television.module.css';

Television.propTypes = {
    children: element,
};
const max = 3;
const min = 1;
const timeRange = ['morning', 'evening', 'night'];

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

const shuffleTime = () => {
    const random = Math.floor(Math.random() * timeRange.length);
    return timeRange[random];
};

function Television({ children }) {
    const [landscape, setLandscape] = useState(1);
    const [time, setTime] = useState(timeRange[0]);
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
                className={`${televisionStyles.children__wrapper} ${televisionStyles[time]}`}
            >
                {cloneElement(children, { sequence: landscape })}
            </div>
            <div className={televisionStyles.button__group}>
                <button
                    className={televisionStyles.button}
                    onClick={() => {
                        setLandscape(countPrev(landscape));
                        setTime(shuffleTime());
                    }}
                >
                    Prev
                </button>
                <button
                    className={televisionStyles.button}
                    onClick={() => {
                        setLandscape(countRandom(landscape));
                        setTime(shuffleTime());
                    }}
                >
                    Shuffle
                </button>
                <button
                    className={televisionStyles.button}
                    onClick={() => {
                        setLandscape(countNext(landscape));
                        setTime(shuffleTime());
                    }}
                >
                    Next
                </button>
            </div>
            <Img
                fluid={data.file.childImageSharp.fluid}
                alt="A Television frame"
                className={televisionStyles.frame}
            />
        </div>
    );
}

export default Television;
