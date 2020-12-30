import React from 'react';
import Container from '../components/container';
import Display from '../components/display';
import Television from '../components/television';

export default function Home() {
    return (
        <Container>
            <h1>
                Hi! Let&#39;s join the adventure of Ketupat around Indonesia!
            </h1>
            <p>Starting from the capital city</p>
            <Television>
                <Display />
            </Television>
        </Container>
    );
}
