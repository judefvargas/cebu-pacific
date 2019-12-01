import React, { useEffect, useRef, useReducer } from 'react'
import './mainnav.css';
import { convoR, currentCustomer } from '../../customer';
import Button from 'react-bootstrap/Button';
import Conversation from './Conversation';
import { styles } from '../animationStyles';
import {StyleRoot} from 'radium';

export default function Interaction() {
    const messageEndRef = useRef(null);
    const current = [];
    Object.keys(convoR).forEach(function(key) {
        if (parseInt(key) === currentCustomer) current.push(convoR[key]);
    });
    let wholeCon = current[0];

    let length = wholeCon.length-1;
    const [state, dispatch] = useReducer(reducer, {
        count: 1,
        currentIndex: 1,
        hidden: '',
        longDiv: '',
        disabled: false,
        length: length,
        current: wholeCon[1],
        isBtnPulse: false
    });
    function reducer(state, action) {
        switch(action.type) {
            case 'BUTTON_CLICKED': {
                return {
                    ...state,
                    count: state.count+1,
                    currentIndex: (state.currentIndex===1)?0:1,
                    hidden: (state.count===state.length-1)?'isHidden':'',
                    longDiv: (state.count===state.length-1)?'longDiv':'',
                    disabled: typeof(wholeCon[state.count+1])!=='object' ? true : false,
                    current: wholeCon[state.count+1],
                    isBtnPulse: false,
                }
            }
            case 'UPDATE_CHOICE': {
                return {
                    ...state,
                    disabled: false
                }
            }
            case 'UPDATE_CONVO': {
                return {
                    ...state, 
                    current: wholeCon[state.count+1],
                    isBtnPulse: wholeCon[state.count+1]!=='object'?true:false,
                }
            }
            default: return state;
        }
    }
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
            `}
        </style>
        <div className="col col-md-4 convo">
            
            <div className={`conversation ${state.longDiv}`} id="style-3" >
                <div className="divOverflow" >
                    <Conversation wholeCon={wholeCon}  updateConv={() => { dispatch({type: 'UPDATE_CONVO'}) }} id="container3" update={ () => { dispatch({type: 'UPDATE_CHOICE'}) } } current={state.current}  count={state.count} key="1" index={state.currentIndex}/>
                </div>
                <div id="reference1" ref={messageEndRef} ></div>
            </div>
            {state.isBtnPulse ? 
            (<StyleRoot>
            <div style={styles.bounceIn} ><Button className={state.hidden} disabled={state.disabled} onClick={ () => {
                dispatch({type: 'BUTTON_CLICKED'})
            } } variant="next">NEXT
            </Button></div>
            </StyleRoot>) : (
                <Button className={state.hidden} disabled={state.disabled} onClick={ () => {
                    dispatch({type: 'BUTTON_CLICKED'})
                } } variant="next">NEXT
                </Button>
            )
            }
        </div>
        </>
    );
}
