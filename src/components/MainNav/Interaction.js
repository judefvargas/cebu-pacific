import React, { useState, useEffect, useRef, useReducer } from 'react'
import './mainnav.css';
import { convoR } from '../../customer';
import Button from 'react-bootstrap/Button';
import Conversation from './Conversation';
import { styles } from '../animationStyles';
// import {StyleRoot} from 'radium';

export default function Interaction(props) {
    const messageEndRef = useRef(null);
    const current = [];
    // const [isOn, turnOn] = useState(false);
    Object.keys(convoR).forEach(function(key) {
        if (parseInt(key) === props.active.id) current.push(convoR[key]);
    });
    const [ wholeCon, updateConvo ] = useState(current);

    let length = wholeCon[0].length-1;
    const initVal = {
        count: 1,
        currentIndex: 1,
        hidden: '',
        longDiv: '',
        disabled: false,
        length: length,
        current: wholeCon[0][1],
        isBtnPulse: false,
        actualCurrent: wholeCon[0][1],
        temp: [], //storage for consequences,
        hasError: false,
        errorMessage: null
    };
    const [state, dispatch] = useReducer(reducer, initVal);
    const updateCon = (convoData) => {
        console.log(convoData);
        if (convoData.convo===undefined) {
            state.hasError = true;
            state.errorMessage = convoData.msg;
        } else {
            state.hasError = false;
            let completeConvo = wholeCon[0];
            let c = insertToObject(completeConvo, convoData.convo, state.count);
            state.temp.push(c);
        }
    }
    const insertToObject = (obj, newObj, index) => {
        let temp = [];
        let final = [];
        for (const [key, value] of Object.entries(obj)) {
            if (parseInt(key)>index) {
                temp.push(value);
                delete obj[key];
            } else {
                final.push(obj[key]);
            }
        }

        for(let i=0; i<newObj.length; i++) {
            final.push(newObj[i]);
        }
        for(let j=0; j<temp.length; j++) {
            final.push(temp[j]);
        }
        return final;
    }
    function reducer(state, action) {
        switch(action.type) {
            case 'BUTTON_CLICKED': {
                return {
                    ...state,
                    count: state.count+1,
                    currentIndex: (state.currentIndex===1)?0:1,
                    disabled: typeof(wholeCon[0][state.count+1])!=='object' ? true : false,
                    current: wholeCon[0][state.count+1],
                    actualCurrent: wholeCon[0][state.count+1],
                    isBtnPulse: false,
                    hasError: false
                }
            }
            case 'UPDATE_CHOICE': {
                return {
                    ...state,
                    disabled: false,
                    actualCurrent: wholeCon[0][state.count],
                    current: wholeCon[0][state.count+1],
                    isBtnPulse: wholeCon[0][state.count+1]!=='object'?true:false,
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

        if (state.temp.length!==0) {
            updateConvo(state.temp);
            state.length = state.temp.length-1;
            state.temp = [];
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
            .btn-start {
                background-color: #28a745;
                color: white;
                bottom: 0;
                margin-top: 79vh;
                height: 5vh;
                width: 72%;
            }
            .btn-start:hover {
                text-decoration: none;
                background-color: #218838;
                border-color: #1e7e34;
                color:white;
            }
            `}
        </style>
        { !props.on ? 
            <div className="col col-md-4 convo"><Button variant="start" onClick={() => {props.turnOn(true)}}>START</Button></div> 
        : (<div className="col col-md-4 convo">
            <div className={`conversation ${state.longDiv}`} id="style-3" >
                <div className="divOverflow" >
                    <Conversation active={props.active} wholeCon={wholeCon[0]} actual={state.actualCurrent} id="container3" update={ () => { dispatch({type: 'UPDATE_CHOICE' }) } } current={state.current}  count={state.count} key="1" index={state.currentIndex} updateConvo={(val)=>{ updateCon(val) }} />
                </div>
                { state.hasError ? <div>{state.errorMessage}</div> : '' }
                <div id="reference1" ref={messageEndRef} ></div>
            </div>
            {state.isBtnPulse ? 
            (<div style={styles.bounceIn} ><Button className={state.hidden} disabled={state.disabled} onClick={ onClick.bind(this) } variant="next">NEXT
            </Button></div>) : (<Button className={state.hidden} disabled={state.disabled} onClick={ onClick.bind(this) } variant="next">NEXT</Button>)
            }
        </div>
        ) }
        </>
    );
}
