import React, { useEffect, useRef } from 'react'
import Card from 'react-bootstrap/Card';
// import {StyleRoot} from 'radium';
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
    let { qid, actual, current, update, activeId } = props;
    
    let question = questionList[qid];
    useEffect(scrollToTop);
    if (current === qid) {
        questionArr.push(
            // <StyleRoot>
                <div style={styles.pulse} ref={qEndRef}>
                    <Card>
                        <div className="outer" >
                            <Card.Header>{ question }</Card.Header>
                            <ListGroup variant="flush">
                                <Choices update={update} activeId={activeId} key={generateKey()} qid={ qid } />
                            </ListGroup>
                        </div>
                    </Card>
                </div>
            // </StyleRoot> 
        );
    } else if(actual === qid) {
        questionArr.push(
            <div style={styles.pulse} ref={qEndRef}>
                <Card>
                    <div className="outer">
                        <Card.Header>{ question }</Card.Header>
                        <ListGroup variant="flush">
                            <Choices update={update} activeId={activeId} key={generateKey()} qid={ qid } />
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
                            <Choices update={update} activeId={activeId} key={generateKey()} qid={ qid } />
                        </ListGroup>
                    </div>
                </Card>
            </div>    
        );
    }
    return questionArr;
}
const searchObject = (searchVal, object) => {
    Object.entries(object).map(([key, value]) => {
        if (parseInt(key)===searchVal) {
            console.log(value);
            return value;
        };
    });
}
function saveAnswer(custId, qId, ans) {
    const customerAnswer = {};
    const prevAnswer = (player.GetVar('PLW_pastChoices'));
    const questionAns = {};
    const allQuestions = [];
    questionAns[qId] = ans;
// console.log(questionAns);
    if (typeof(prevAnswer)!=='string') { 
        let qList = searchObject(custId, prevAnswer);
        console.log(qList);
        qList.push(questionAns);
        console.log(qList);
        customerAnswer[custId.toString()] = qList;
    } else {
        allQuestions.push(questionAns);
        customerAnswer[custId.toString()] = allQuestions;
    }
    console.log(customerAnswer);

    player.SetVar('PLW_pastChoices', customerAnswer);
}

const Choices = (props) => {
    let choices = [];

    const onClick = (cId, qId, ans) => {
        props.update();
        saveAnswer(cId, qId, ans);
    }

    for (let i=0; i<choicesList[props.qid].length; i++) {
        let answer = choicesList[props.qid][i];
        choices.push(
            <ListGroup.Item key={i} onClick={ () => {onClick(props.activeId, props.qid, answer)} }>{ choicesList[props.qid][i] }</ListGroup.Item>
        );
    }
    return choices;
}
