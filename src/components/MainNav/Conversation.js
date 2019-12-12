import React from 'react'
import Question from './Question';
import { styles } from '../animationStyles';
import {StyleRoot} from 'radium';
import generateKey from '../Key';

export default function Conversation(props) {
    let convo = [];
    let { active, update, current, actual, updateConvo,tillBtnClick, updateTill } = props;
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
            
            if (Object.keys(props.wholeCon[i])[0] === 'john') {
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
            } else {
                convo.push(<Question 
                    actual={ actual } 
                    update={update} 
                    key={generateKey()} 
                    current={current} 
                    qid={props.wholeCon[i]} 
                    onDisabled={props.isDisabled} 
                    activeId={active.id} 
                    updateConvo={updateConvo} />);
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
            if (Object.keys(props.wholeCon[i])[0] === 'john') {
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
            } else {
                convo.push(<Question 
                    actual={ actual } 
                    update={update} 
                    key={generateKey()} 
                    current={current} 
                    qid={props.wholeCon[i]} 
                    onDisabled={props.isDisabled} 
                    activeId={active.id} 
                    updateConvo={updateConvo} />);
            }
        }
    }

    return convo;
}
