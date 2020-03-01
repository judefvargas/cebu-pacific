import React from 'react';
import { updateTotal, saveAnswer, saveChatIndex, questionHasAnswer, } from '../storylineActions';
import { answerList, choicesList, consequences } from '../../customer';
import ListGroup from 'react-bootstrap/ListGroup';

export const Choices = (props) => {
    let choices = [];
    
    // action on choice click
    const onClick = (qId, ansIndex) => {
        let correctAnsArr = answerList[qId];
        // correct answer is answer index + 1
        if (correctAnsArr[0] === (ansIndex+1)) {
            updateTotal(true);
        } else {
            updateTotal(false);
        }
        saveAnswer(props.activeId, props.qid, ansIndex+1);
        let cons = searchObject(qId, consequences);
        if (cons===undefined) {
            props.updateConvo({ convo: cons, msg: 'No consequence data found.' });
        } else {
            let consFinal = searchObject(`choice ${(ansIndex+1)}`, cons);
            props.updateConvo({ convo: consFinal, msg: 'No consequence choice data found.'  });
        }
        saveChatIndex(props.activeId, props.count);
        props.update();

    }
    let answers = localStorage.getItem('CHAT_pastChoices') ?? [];
    let curAns;
    if (answers.length!==0) {
        answers = JSON.parse(answers);
        curAns = questionHasAnswer(props.qid, props.activeId);
    }
    for (let i=0; i<choicesList[props.qid].length; i++) {
        let bgColor = '';
        if (curAns===i+1) {
            bgColor = 'warning';
        }
        choices.push(
            <ListGroup.Item variant={bgColor} key={i} onClick={ () => {onClick(props.qid, i)} }>{ choicesList[props.qid][i] }</ListGroup.Item>
        );
    }
    return choices;
}

const searchObject = (searchVal, object) => {
    for (const [key, value] of Object.entries(object)) {
        if ((key)===searchVal) {
            return value;
        }
    }
}