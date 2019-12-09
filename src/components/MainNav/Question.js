import React, { useEffect, useRef } from 'react'
import Card from 'react-bootstrap/Card';
// import {StyleRoot} from 'radium';
import { styles } from '../animationStyles';
import ListGroup from 'react-bootstrap/ListGroup';
import { questionList, choicesList, consequences } from '../../customer';
import generateKey from '../Key';

export default function Question(props) {
    const qEndRef = useRef(null);
  
    const scrollToTop = (ref) => {
        window.scrollTo(0, qEndRef.current.offsetTop)
    }
    const questionArr = [];
    let { qid, actual, current, update, activeId, updateConvo } = props;
    let question = questionList[qid];
    useEffect(scrollToTop);
    if (current === qid) {
        questionArr.push(
            <div style={styles.pulse} ref={qEndRef}>
                <Card>
                    <div className="outer" >
                        <Card.Header>{ question }</Card.Header>
                        <ListGroup variant="flush">
                            <Choices update={update} updateConvo={updateConvo} activeId={activeId} key={generateKey()} qid={ qid } />
                        </ListGroup>
                    </div>
                </Card>
            </div>
        );
    } else if(actual === qid) {
        questionArr.push(
            <div style={styles.pulse} ref={qEndRef}>
                <Card>
                    <div className="outer">
                        <Card.Header>{ question }</Card.Header>
                        <ListGroup variant="flush">
                            <Choices update={update} updateConvo={updateConvo} activeId={activeId} key={generateKey()} qid={ qid }/>
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
                            <Choices update={update} updateConvo={updateConvo} activeId={activeId} key={generateKey()} qid={ qid } />
                        </ListGroup>
                    </div>
                </Card>
            </div>    
        );
    }
    return questionArr;
}
const searchObject = (searchVal, object) => {
    for (const [key, value] of Object.entries(object)) {
        if ((key)===searchVal) {
            return value;
        }
    }
}
function saveAnswer(prevAns, custId, qId, ans) {
    const customerAnswer = {};
    // const prevAnswer = (player.GetVar('PLW_pastChoices'));
    const questionAns = {};
    const allQuestions = [];
    questionAns[qId] = ans;
// console.log(questionAns);
    if (typeof(prevAnswer)!=='string') { 
        let qList = searchObject(custId, prevAns);
        // console.log(qList);
        qList.push(questionAns);
        customerAnswer[custId.toString()] = qList;
    } else {
        allQuestions.push(questionAns);
        customerAnswer[custId.toString()] = allQuestions;
    }
    return customerAnswer;
    // player.SetVar('PLW_pastChoices', customerAnswer);
}

const Choices = (props) => {
    let choices = [];
    
    // action on choice click
    const onClick = (cId, qId, ansIndex) => {
        let cons = searchObject(qId, consequences);
        if (cons===undefined) {
            props.updateConvo({ convo: cons, msg: 'No consequence data found.' });
        } else {
            let consFinal = searchObject(`choice ${(ansIndex+1)}`, cons);
            props.updateConvo({ convo: consFinal, msg: 'No consequence choice data found.'  });
        }
        props.update();

    }

    for (let i=0; i<choicesList[props.qid].length; i++) {
        choices.push(
            <ListGroup.Item key={i} onClick={ () => {onClick(props.activeId, props.qid, i)} }>{ choicesList[props.qid][i] }</ListGroup.Item>
        );
    }
    return choices;
}
