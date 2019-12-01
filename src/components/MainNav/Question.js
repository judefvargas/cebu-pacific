import React, { useState, useEffect, useRef } from 'react'
import Card from 'react-bootstrap/Card';
import {StyleRoot} from 'radium';
import { styles } from '../animationStyles';
import ListGroup from 'react-bootstrap/ListGroup';
import { questionList, choicesList } from '../../customer';
import generateKey from '../Key';

export default function Question(props) {
    
    const qEndRef = useRef(null);
    const scrollToTop = (ref) => {
        window.scrollTo(0, qEndRef.current.offsetTop)
    }
    const questionArr = [];
    let { qid } = props;
    
    let question = questionList[qid];
    useEffect(scrollToTop);
    if (props.current === qid) {
        questionArr.push(
            <StyleRoot>
                <div style={styles.pulse} ref={qEndRef}>
                    <Card>
                        <div className="outer" >
                            <Card.Header>{ question }</Card.Header>
                            <ListGroup variant="flush">
                                <Choices updateCur={props.updateCur}  update={props.update} key={generateKey()} qid={ qid } />
                            </ListGroup>
                        </div>
                    </Card>
                </div>
            </StyleRoot>
        );
    } else {
        questionArr.push(
            <div style={styles.pulse} ref={qEndRef}>
                <Card>
                    <div className="outer" >
                        <Card.Header>{ question }</Card.Header>
                        <ListGroup variant="flush">
                            <Choices updateCur={props.updateCur} update={props.update} key={generateKey()} qid={ qid } />
                        </ListGroup>
                    </div>
                </Card>
            </div>    
        );
    }
    return questionArr;
}

const Choices = (props) => {
    let choices = [];
    const [answers, updateAns] = useState([]);

    const onClick = (ans) => {
        props.update();
        props.updateCur();
        console.log(answers);
        updateAns(answers[props.qid].push({
            'answer': ans 
        }))
    }
    for (let i=0; i<choicesList[props.qid].length; i++) {
        let answer = choicesList[props.qid][i];
        choices.push(
            <ListGroup.Item key={i} onClick={onClick.bind(this, answer)}>{ choicesList[props.qid][i] }</ListGroup.Item>
        );
    }
    return choices;
}
