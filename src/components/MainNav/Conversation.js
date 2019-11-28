import React from 'react'
import Question from './Question';
import { styles } from '../animationStyles';
import {StyleRoot} from 'radium';

export default function Conversation(props) {
    let convo = [];
    
    for (let i=0; i<=props.count; i++) {
        if (i>1 && props.count===i) {//show one at a time
            let convString = Object.values(props.wholeCon[i])[0];
            if (Object.keys(props.wholeCon[i])[0] === 'john') {
                convo.push(
                    <StyleRoot>
                    <div style={styles.fadeInDown} className="convo1">
                        <div className="callout isOrange">{ convString.toUpperCase() }</div>
                        <div className="bgConvo-left right"><img className="johnImage isOrange" alt="" src={`characters/john.png`} /></div>
                    </div>
                    </StyleRoot>
                );
            } else if (Object.keys(props.wholeCon[i])[0] === 'customer') {
                convo.push(
                    <StyleRoot>
                    <div style={styles.fadeInDown} className="convo2">
                        <div className="callout isGreen right">{ convString.toUpperCase() }</div>
                        <div className="bgConvo-right"><img className="johnImage isGreen" alt="" src={`characters/1.png`} /></div>
                    </div>
                    </StyleRoot>
                );
            } else {
                convo.push(<Question onDisabled={props.isDisabled} />);
            }
            
        } else {
            let convString = Object.values(props.wholeCon[i])[0];
            if (Object.keys(props.wholeCon[i])[0] === 'john') {
                convo.push(
                    <StyleRoot>
                    <div style={styles.fadeInDown} className="convo1">
                        <div className="callout isOrange">{ convString.toUpperCase() }</div>
                        <div className="bgConvo-left right"><img className="johnImage isOrange" alt="" src={`characters/john.png`} /></div>
                    </div>
                    </StyleRoot>
                );
            } else if (Object.keys(props.wholeCon[i])[0] === 'customer') {
                convo.push(
                    <StyleRoot>
                    <div style={styles.fadeInDown} className="convo2">
                        <div className="callout isGreen right">{ convString.toUpperCase() }</div>
                        <div className="bgConvo-right"><img className="johnImage isGreen" alt="" src={`characters/1.png`} /></div>
                    </div>
                    </StyleRoot>
                );
            } else {
                convo.push(<Question onDisabled={props.isDisabled} />);
            }
          
        }
        
    }

    return convo;
}
