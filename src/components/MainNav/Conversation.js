import React from 'react'
import Question from './Question';
import { styles } from '../animationStyles';
import {StyleRoot} from 'radium';
import { player, CUSTOMERS, } from '../../customer';

export default function Conversation(props) {
    let convo = [];
    let { active, tillBtnClick, updateTill } = props;
    const total = CUSTOMERS.length;
    let actualDone = JSON.parse(player.GetVar('CHAT_customers_done'));

    for (let i=0; i<=props.count; i++) {
        let convString = Object.values(props.wholeCon[i])[0];
        if (i>1 && props.count===i) { //show one at a time
            if (convString.includes('TILL') && !tillBtnClick) {
                updateTill(true);
            } else {
                updateTill(false);
            }

            if (convString.includes('… … …')) {
                convString = <i>User looking at the provided forms</i>;
            }
            
            if (Object.keys(props.wholeCon[i])[0] === 'teller') {
                convo.push(
                    <StyleRoot>
                    <div style={styles.fadeInDown} className="convo1">
                        <span className="convoSpan" style={{float:'right'}}><div className="callout isOrange right">{ convString }</div></span>
                    </div>
                    </StyleRoot>
                );
            } else if (Object.keys(props.wholeCon[i])[0] === 'customer') {
                convo.push(
                    <StyleRoot>
                    <div style={styles.fadeInDown} className="convo2">
                        <div className="bgConvo-right"><img className="johnImage isGreen" alt="" src={`characters/${active.image}`} /></div>
                        <span className="convoSpan" style={{float:'left'}}><div className="callout isGreen" >{ convString }</div></span>
                    </div>
                    </StyleRoot>
                );
            } else if (Object.keys(props.wholeCon[i])[0] === 'branch_manager') {
                convo.push(
                    <StyleRoot>
                    <div style={styles.fadeInDown} className="convo2">
                        <div className="bgConvo-right"><img className="johnImage isGreen" alt="" src={`characters/8.png`} /></div>
                        <span className="convoSpan" style={{float:'left'}}><div className="callout isBlue ">{ convString }</div></span>
                    </div>
                    </StyleRoot>
                );
            } else if (props.wholeCon[i].includes("EXIT-NEXT")) {
                let currentDone = [...actualDone, props.active.id];
                if (currentDone.length === total) {
                    i = props.count +1;
                } else {
                    props.reset();
                    props.next();
                }
            } else {
                convo.push(<Question 
                    { ...props }
                    qid={props.wholeCon[i]} 
                    onDisabled={props.isDisabled} 
                    activeId={active.id} 
                   />);
            }
            
        } else {
            if (convString.includes('TILL') && !tillBtnClick) {
                updateTill(true);
            } else {
                updateTill(false);
            }

            if (convString.includes('… … …')) {
                convString = <i>User looking at the provided forms</i>;
            }
            if (Object.keys(props.wholeCon[i])[0] === 'teller') {
                convo.push(
                    <StyleRoot>
                    <div style={styles.fadeInDown} className="convo1">
                    <span className="convoSpan" style={{float:'right'}}><div className="callout isOrange right">{ convString }</div></span>
                    </div>
                    </StyleRoot>
                );
            } else if (Object.keys(props.wholeCon[i])[0] === 'customer') {
                convo.push(
                    <StyleRoot>
                    <div style={styles.fadeInDown} className="convo2">
                        <div className="bgConvo-right"><img className="johnImage isGreen" alt="" src={`characters/${active.image}`} /></div>
                        <span className="convoSpan" style={{float:'left'}}><div className="callout isGreen" >{ convString }</div></span>
                    </div>
                    </StyleRoot>
                );
            } else if (Object.keys(props.wholeCon[i])[0] === 'branch_manager') {
                convo.push(
                    <StyleRoot>
                    <div style={styles.fadeInDown} className="convo2">
                        <div className="bgConvo-right"><img className="johnImage isGreen" alt="" src={`characters/8.png`} /></div>
                        <span className="convoSpan" style={{float:'left'}}><div className="callout isBlue ">{ convString }</div></span>
                    </div>
                    </StyleRoot>
                );
            } else if (props.wholeCon[i].includes("EXIT-NEXT")) {
                props.reset();
                props.next();
            } else {
                convo.push(<Question 
                    { ...props }
                    qid={props.wholeCon[i]} 
                    onDisabled={props.isDisabled} 
                    activeId={active.id} 
                   />);
            }
        }
    }

    return convo;
}
