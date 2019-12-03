import React, { useEffect, useRef } from 'react'
import Card from 'react-bootstrap/Card';
import {StyleRoot} from 'radium';
import { styles } from '../animationStyles';
import ListGroup from 'react-bootstrap/ListGroup';
import { player, questionList, choicesList } from '../../customer';
import generateKey from '../Key';

export default function Question(props) {
    const qEndRef = useRef(null);
    const scrollToTop = (ref) => {
        window.scrollTo(0, qEndRef.current.offsetTop)
    }
    const questionArr = [];
    let { qid, actual, current, update } = props;
    
    let question = questionList[qid];
    useEffect(scrollToTop);
    if (current === qid) {
        questionArr.push(
            <StyleRoot>
                <div style={styles.pulse} ref={qEndRef}>
                    <Card>
                        <div className="outer" >
                            <Card.Header>{ question }</Card.Header>
                            <ListGroup variant="flush">
                                <Choices update={update} key={generateKey()} qid={ qid } />
                            </ListGroup>
                        </div>
                    </Card>
                </div>
            </StyleRoot>
        );
    } else if(actual === qid) {
        questionArr.push(
            <div style={styles.pulse} ref={qEndRef}>
                <Card>
                    <div className="outer">
                        <Card.Header>{ question }</Card.Header>
                        <ListGroup variant="flush">
                            <Choices update={props.update} key={generateKey()} qid={ qid } />
                        </ListGroup>
                    </div>
                </Card>
            </div>    
        );
    } else {
        questionArr.push(
            <div style={styles.pulse} ref={qEndRef}>
                <Card>
                    <div className="outer" style={{pointerEvents: "none"}}>
                        <Card.Header>{ question }</Card.Header>
                        <ListGroup variant="flush">
                            <Choices update={props.update} key={generateKey()} qid={ qid } />
                        </ListGroup>
                    </div>
                </Card>
            </div>    
        );
    }
    return questionArr;
}

function saveAnswer(custId, qId, ans) {
    const custAns = {};
    const qAns = {};
    qAns[qId] = ans;
    custAns[custId] = qAns;
    console.log(custAns);
    player.SetVar('PLW_pastChoices', custAns);
}
const Choices = (props) => {
    let choices = [];

    const onClick = (ans) => {
        props.update();
        saveAnswer();
    }

    for (let i=0; i<choicesList[props.qid].length; i++) {
        let answer = choicesList[props.qid][i];
        choices.push(
            <ListGroup.Item key={i} onClick={onClick.bind(this, answer)}>{ choicesList[props.qid][i] }</ListGroup.Item>
        );
    }
    return choices;
}
