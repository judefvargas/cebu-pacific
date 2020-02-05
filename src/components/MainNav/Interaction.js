import React, { useEffect, useRef, useReducer } from 'react'
import './mainnav.css';
import { CUSTOMERS, convoR, initChatCount } from '../../customer';
import Button from 'react-bootstrap/Button';
import Conversation from './Conversation';
import { styles } from '../animationStyles';
import {StyleRoot} from 'radium';

export default function Interaction(props) {
    const messageEndRef = useRef(null);
    let current = [];
    /* Set current conversation according to current active id */

    for (let [key, value] of Object.entries(convoR)) {
        if (parseInt(key) === props.active.id) current.push(value);
    }

   
    /* Set initial values */
    const initVal = {
        count: initChatCount, //chat message count initially shown
        // currentIndex: 1,
        hidden: '', //for hiding next button
        longDiv: '', //if next button is hidden, chat will take up entire space
        disabled: current.length!==0 ? false : true, //button disable (for decision points)
        length: current.length!==0 ? current[0].length-1 : 0, //length of conversation
        current: current.length!==0 ? current[0][1] : 0,
        isBtnPulse: false, //button animation 
        actualCurrent: current.length!==0 ? current[0][1] : 0,
        temp: [], //storage for consequences,
        hasError: current.length!==0 ? false : true, //has error message (no consequence data, etc)
        errorMessage: current.length!==0 ? null : 'No conversation data available', //error message container
        wholeCon: current.length!==0 ? current[0] : [], //whole conversation
        isNew: false,
        btnTitle: 'NEXT'
    };

     useEffect(() => {
        dispatch({type: 'RESET'});
      }, [props.active.id]);
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
                // localStorage.setItem('conversation', state.wholeCon);
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
                    count: state.count +1,
                    disabled: false,
                    actualCurrent: state.wholeCon[state.count],
                    current: state.wholeCon[state.count+1],
                    isBtnPulse: state.wholeCon[state.count+1]!=='object'?true:false,
                    hasError: false,
                    wholeCon: state.temp[0]
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
            case 'UPDATE_BTN_TITLE': {
                return {
                    ...state, 
                    btnTitle: action.payload
                }
            }
            case 'DISABLE_BUTTON': {
                return {
                    ...state,
                    disabled: true
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
            if (CUSTOMERS.length===props.active.id) {
                // player.SetVar('CARGO_showResults', true);
            } else {
                dispatch({type: 'UPDATE_NEW', payload: true});
                dispatch({type: 'DISABLE_BUTTON'});
                props.updateEl(null);
                props.updateTillClick(false);
                setTimeout(() => {
                    props.next()
                    dispatch({type: 'RESET'});
    
                }, 500);
            }

        } else {
            dispatch({type: 'BUTTON_CLICKED'})
        }
        
    }

    if ((state.wholeCon.length-1 === state.count) && typeof(state.wholeCon[state.count])!=='string' && state.btnTitle!=='NEXT CUSTOMER' && state.btnTitle!=='SHOW RESULTS') {
        if (CUSTOMERS.length===props.active.id) {
            dispatch({type: 'UPDATE_BTN_TITLE', payload: 'SHOW RESULTS'});
        } else {
            dispatch({type: 'UPDATE_BTN_TITLE', payload: 'NEXT CUSTOMER'});
        }
    }
    /* For scrolling to bottom of div when next button is clicked (i.e. always show recent messages) */ 
    const scrollToBottom = () => {
        if (state.count>1 && messageEndRef.current!==null) {
            messageEndRef.current.scrollIntoView({ behavior: 'smooth', inline: 'end' });
        }
    }
    
    useEffect(scrollToBottom);
    return (
        <>
        <style type="text/css">
            {`
            .btn-next {
                background-color: #28a745;
                color: white;
                bottom: 0;
                margin-top: 10%;
                height: 5vh;
                width: 72%;
            }
            .btn-next:hover {
                text-decoration: none;
                background-color: #218838;
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
            .btn-next:disabled {
                background-color: #968a8a
            }
            `}
        </style>
        { (!props.on) 
        ? <div className="col col-md-4 convo"><div className="startContainer" ><Button variant="start" onClick={() => {props.turnOn(true)}}>START</Button></div></div>
        : (<div className="col col-md-4 convo" >
            <StyleRoot><div className={`conversation ${state.longDiv}`} id="style-3" style={ (state.isNew) ? (styles.fadeOut) : {} }>
                <div className="divOverflow" >
                    { state.wholeCon.length!==0 ? 
                    (<Conversation active={props.active} wholeCon={state.wholeCon} actual={state.actualCurrent} id="container3" update={ () => { dispatch({type: 'UPDATE_CHOICE' }) } } current={state.current}  count={state.count} key="1" updateConvo={(val)=>{ updateCon(val) }} updateTill={props.updateTill} tillBtnClick={props.tillBtnClick} />) : '' }
                </div>
                { state.hasError ? <div>{state.errorMessage}</div> : '' }
                <div id="reference1" ref={messageEndRef} ></div>
            </div></StyleRoot>
        <Button className={state.btnTitle!=='NEXT'?'nextBtn':''} disabled={state.disabled} onClick={ onClick.bind(this) } variant="next">{state.btnTitle}</Button>
        </div>
        ) }
        </>
    );
}
