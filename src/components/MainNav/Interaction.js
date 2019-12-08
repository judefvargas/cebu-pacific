import React, { useEffect, useRef, useReducer } from 'react'
import './mainnav.css';
import { convoR } from '../../customer';
import Button from 'react-bootstrap/Button';
import Conversation from './Conversation';
import { styles } from '../animationStyles';
import {StyleRoot} from 'radium';

export default function Interaction(props) {
    const messageEndRef = useRef(null);
    const current = [];
    /* Set current conversation according to current active id */
    Object.keys(convoR).forEach(function(key) {
        if (parseInt(key) === props.active.id) current.push(convoR[key]);
    });

    let length = current[0].length-1;
    /* Set initial values */
    const initVal = {
        count: 1,
        // currentIndex: 1,
        hidden: '', //for hiding next button
        longDiv: '', //if next button is hidden, chat will take up entire space
        disabled: false, //button disable (for decision points)
        length: length, //length of conversation
        current: current[0][1],
        isBtnPulse: false, //button animation 
        actualCurrent: current[0][1],
        temp: [], //storage for consequences,
        hasError: false, //has error message (no consequence data, etc)
        errorMessage: null, //error message container
        wholeCon: current[0], //whole conversation
        isNew: false,
    };
    const [state, dispatch] = useReducer(reducer, initVal);
    
    /* Insert object to specific index in object */
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
    /* Reducer */
    function reducer(state, action) {
        switch(action.type) {
            case 'BUTTON_CLICKED': {
                return {
                    ...state,
                    count: state.count+1,
                    // currentIndex: (state.currentIndex===1)?0:1,
                    disabled: typeof(state.wholeCon[state.count+1])!=='object' ? true : false,
                    current: state.wholeCon[state.count+1],
                    actualCurrent: state.wholeCon[state.count+1],
                    isBtnPulse: false,
                    hasError: false
                }
            }
            case 'UPDATE_CHOICE': {
                return {
                    ...state,
                    disabled: false,
                    actualCurrent: state.wholeCon[state.count],
                    current: state.wholeCon[state.count+1],
                    isBtnPulse: state.wholeCon[state.count+1]!=='object'?true:false,
                }
            }
            case 'UPDATE_LENGTH': {
                return {
                    ...state,
                    length: action.payload
                }
            }
            case 'UPDATE_TEMP': {
                return {
                    ...state, 
                    temp: action.payload
                }
            }
            case 'UPDATE_NEW': {
                return {
                    ...state, 
                    isNew: action.payload
                }
            }
            case 'RESET': {
                return { ...initVal }
            }
            default: return state;
        }
    }
    /* Update conversation data */
    const updateCon = (convoData) => {
        if (convoData.convo===undefined) {
            state.hasError = true;
            state.errorMessage = convoData.msg;
        } else {
            state.hasError = false;
            let completeConvo = state.wholeCon;

            let c = insertToObject(completeConvo, convoData.convo, state.count);
            dispatch({type: 'UPDATE_TEMP', payload: [c]});
        }
    }
     /* Actions when next button is clicked */
     const onClick = () => {
        let tempLength = state.length;
        if (state.temp.length!==0) {
            state.wholeCon = state.temp[0];
            tempLength = state.temp[0].length;
            dispatch({type: 'UPDATE_LENGTH', payload: state.temp[0].length});
            state.temp = [];
        }
     
        if (state.count+1===tempLength) {
            dispatch({type: 'UPDATE_NEW', payload: true});
            
            props.updateEl(null);
            props.updateTillClick(false);
            props.next();
            
            setTimeout(() => {
                dispatch({type: 'RESET'});

            }, 1000);


        } else {
            // props.updateNew(false);
            dispatch({type: 'BUTTON_CLICKED'})
        }
    }
    /* For scrolling to bottom of div when next button is clicked (i.e. always show recent messages) */ 
    const scrollToBottom = () => {
        if (state.count>1) {
            messageEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
        { (!props.on) 
        ? <div className="col col-md-4 convo"><StyleRoot><div className="startContainer" style={styles.pulse} ><Button variant="start" onClick={() => {props.turnOn(true)}}>START</Button></div></StyleRoot></div>
        : (<div className="col col-md-4 convo" >
            <StyleRoot><div className={`conversation ${state.longDiv}`} id="style-3" style={ (state.isNew) ? (styles.fadeOut) : {} }>
                <div className="divOverflow" >
                    <Conversation active={props.active} wholeCon={state.wholeCon} actual={state.actualCurrent} id="container3" update={ () => { dispatch({type: 'UPDATE_CHOICE' }) } } current={state.current}  count={state.count} key="1" updateConvo={(val)=>{ updateCon(val) }} updateTill={props.updateTill} tillBtnClick={props.tillBtnClick} />
                </div>
                { state.hasError ? <div>{state.errorMessage}</div> : '' }
                <div id="reference1" ref={messageEndRef} ></div>
            </div></StyleRoot>
            {state.isBtnPulse ? (<StyleRoot>
            <div style={styles.bounceIn} ><Button className={state.hidden} disabled={state.disabled} onClick={ onClick.bind(this) } variant="next">NEXT</Button></div></StyleRoot>) 
            : (<Button className={state.hidden} disabled={state.disabled} onClick={ onClick.bind(this) } variant="next">NEXT</Button>)}
        </div>
        ) }
        </>
    );
}
