import React from 'react';
import { Helmet } from 'react-helmet';
import Article from '../components/article';
import Container from '../components/container';

export default function About() {
    return (
        <Container>
            <Helmet>
                <title>About Ketupat</title>
            </Helmet>
            <Article />
        </Container>
    );
}
