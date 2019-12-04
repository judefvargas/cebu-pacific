import React, { useEffect, useRef, useReducer } from 'react'
import './mainnav.css';
import { convoR } from '../../customer';
import Button from 'react-bootstrap/Button';
import Conversation from './Conversation';
import { styles } from '../animationStyles';
// import {StyleRoot} from 'radium';

export default function Interaction(props) {
    const messageEndRef = useRef(null);
    const current = [];
    Object.keys(convoR).forEach(function(key) {
        if (parseInt(key) === props.active.id) current.push(convoR[key]);
    });
    let wholeCon = current[0];

    let length = wholeCon.length-1;
    const initVal = {
        count: 1,
        currentIndex: 1,
        hidden: '',
        longDiv: '',
        disabled: false,
        length: length,
        current: wholeCon[1],
        isBtnPulse: false,
        actualCurrent: wholeCon[1],
    };
    const [state, dispatch] = useReducer(reducer, initVal);
    function reducer(state, action) {
        switch(action.type) {
            case 'BUTTON_CLICKED': {
                return {
                    ...state,
                    count: state.count+1,
                    currentIndex: (state.currentIndex===1)?0:1,
                    disabled: typeof(wholeCon[state.count+1])!=='object' ? true : false,
                    current: wholeCon[state.count+1],
                    actualCurrent: wholeCon[state.count+1],
                    isBtnPulse: false,
                }
            }
            case 'UPDATE_CHOICE': {
                return {
                    ...state,
                    disabled: false,
                    actualCurrent: wholeCon[state.count],
                    current: wholeCon[state.count+1],
                    isBtnPulse: wholeCon[state.count+1]!=='object'?true:false,
                }
            }
            case 'RESET': {
                return { ...initVal }
            }
            default: return state;
        }
    }
    const scrollToBottom = () => {
        if (state.count>1) {
            messageEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
    const onClick = () => {
        if (state.count===state.length) {
            dispatch({type: 'RESET'});
            props.next();
        } else {
            dispatch({type: 'BUTTON_CLICKED'})
        }
    }
    useEffect(scrollToBottom);

    return (
        <>
        <style type="text/css">
            {`
            .btn-next {
                background-color: #707070;
                color: white;
                bottom: 0;
                margin-top: 10%;
                height: 5vh;
                width: 72%;
            }
            .btn-next:hover {
                text-decoration: none;
                background-color: #5a5757;
                color:white;
            }
            `}
        </style>
        <div className="col col-md-4 convo">
            
            <div className={`conversation ${state.longDiv}`} id="style-3" >
                <div className="divOverflow" >
                    <Conversation active={props.active} wholeCon={wholeCon} actual={state.actualCurrent} id="container3" update={ () => { dispatch({type: 'UPDATE_CHOICE'}) } } current={state.current}  count={state.count} key="1" index={state.currentIndex}/>
                </div>
                <div id="reference1" ref={messageEndRef} ></div>
            </div>
            {state.isBtnPulse ? 
            (<div style={styles.bounceIn} ><Button className={state.hidden} disabled={state.disabled} onClick={ onClick.bind(this) } variant="next">NEXT
            </Button></div>) : (<Button className={state.hidden} disabled={state.disabled} onClick={ onClick.bind(this) } variant="next">NEXT</Button>)
            }
        </div>
        </>
    );
}
