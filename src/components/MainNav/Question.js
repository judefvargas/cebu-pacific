import React, { useEffect, useRef } from 'react'
import Card from 'react-bootstrap/Card';
// import {StyleRoot} from 'radium';
import { styles } from '../animationStyles';
import ListGroup from 'react-bootstrap/ListGroup';
import { Choices } from './Choices';
import { questionList } from '../../customer';
import generateKey from '../Key';

export default function Question(props) {
  const qEndRef = useRef(null);

  const scrollToTop = (ref) => {
    window.scrollTo(0, qEndRef.current.offsetTop)
  }
  const questionArr = [];
  let { qid, current } = props;
  let question = questionList[qid];
  useEffect(scrollToTop);
  if (current === qid) {
    questionArr.push(
      <div style={styles.pulse} ref={qEndRef}>
        <Card>
          <div className="outer" >
            <Card.Header>{ question }</Card.Header>
            <ListGroup variant="flush">
              <Choices { ...props } key={generateKey()} />
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
              <Choices { ...props } key={generateKey()} />
            </ListGroup>
          </div>
        </Card>
      </div>    
    );
  }
  return questionArr;
}
