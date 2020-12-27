import React from 'react';
import Container from '../components/container';
import Display from '../components/display';
import Television from '../components/television';

export default function Home() {
    return (
        <Container>
            <h1>Hi! Let's join the adventure of Ketupat around Indonesia!</h1>
            <p>Change the channel to jump into another province</p>
            <Television>
                <Display />
            </Television>
        </Container>
    );
}
