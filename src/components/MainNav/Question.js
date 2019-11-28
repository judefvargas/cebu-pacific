import React, { useEffect, useRef } from 'react'
import Card from 'react-bootstrap/Card';
import {StyleRoot} from 'radium';
import { styles } from '../animationStyles';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Question() {
    const qEndRef = useRef(null);
    const scrollToTop = (ref) => {
        window.scrollTo(0, qEndRef.current.offsetTop)
    }
    const btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    useEffect(scrollToTop); 
    return (
        <StyleRoot>
            <div style={styles.pulse} ref={qEndRef}>
                <Card>
                    <Card.Header>Question</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item onClick={btnClick}>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </StyleRoot>
    );
}
