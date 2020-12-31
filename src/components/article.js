import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import articleStyles from './article.module.css';

export default function Article() {
    const {
        allFile: { edges },
    } = useStaticQuery(graphql`
        {
            allFile(filter: { relativeDirectory: { eq: "ketupat-photo" } }) {
                edges {
                    node {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                                originalName
                            }
                        }
                    }
                }
            }
        }
    `);
    const {
        node: { childImageSharp: sketch },
    } = edges.find(
        ({
            node: {
                childImageSharp: {
                    fluid: { originalName },
                },
            },
        }) => originalName === 'ketupat-sketch.png'
    );

    const {
        node: { childImageSharp: satePadang },
    } = edges.find(
        ({
            node: {
                childImageSharp: {
                    fluid: { originalName },
                },
            },
        }) => originalName === 'sate-padang.jpg'
    );

    return (
        <Fragment>
            <h1 className={articleStyles.title}>About Ketupat</h1>
            <Img
                fluid={sketch.fluid}
                alt="Ketupat Sketch"
                className={articleStyles.sketch}
                style={{ position: 'absolute' }}
            />
            <p className={articleStyles.first__paragraph}>
                Ketupat is a rice cake packed inside a diamond-shaped container
                of woven palm leaf pouch, originating in Indonesia.
            </p>
            <p>
                Ketupat is cut open and its skin (woven palm leaf) removed. The
                inner rice cake is cut in pieces and served as a staple food in
                place of plain steamed rice.
            </p>
            <div>
                <p className={articleStyles.third__paragraph}>
                    It is usually eaten with rendang, opor ayam, sayur labu
                    (chayote soup), or sambal goreng hati (liver in sambal), or
                    served as an accompaniment to satay (chicken or beef or lamb
                    in skewers) or gado-gado (mixed vegetables with peanut
                    sauce).
                </p>
                <Img
                    fluid={satePadang.fluid}
                    alt="Sate Padang"
                    className={articleStyles.image__center}
                    style={{ display: 'inline-block' }}
                />
            </div>
            <p className={articleStyles.last_paragraph}>
                Ketupat is also the main element of certain dishes such as
                ketupat sayur (ketupat in chayote soup with tofu and boiled egg)
                and kupat tahu (ketupat and tofu in peanut sauce).
            </p>
            <p>
                Source : Wikipedia -
                <a href={'https://en.wikipedia.org/wiki/Ketupat'}> Ketupat</a>
            </p>
        </Fragment>
    );
}
