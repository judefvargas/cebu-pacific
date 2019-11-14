import React, { useState, useEffect, useRef } from 'react'
import './mainnav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CUSTOMERS, CONVERSATION } from '../../customer';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Radium, {StyleRoot} from 'radium';
import Popover from 'react-bootstrap/Popover';
import { fadeInDown } from 'react-animations';

export default function Interaction() {
    const [count, updateCount] = useState(1);
    const [currentIndex, updateIndex] = useState(1);
    const [hidden, updateHidden] = useState('');
    const [longDiv, updateDiv] = useState('');
    const messageEndRef = useRef(null);
    
    let length = CONVERSATION.length;
    let { image } = CUSTOMERS[1];
    const scrollToBottom = () => {
        messageEndRef.current.scrollIntoView({ behavior: "smooth" });
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
        <div className="col col-md-2 convo">
            <div className="col-md-12 interaction">
            <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
                <span className="fa-layers fa-fw">
                    <FontAwesomeIcon icon="circle" size="lg" color="red" />
                    <FontAwesomeIcon icon="info" inverse size="sm"/>
                </span>
            </OverlayTrigger>
            <div className="currentCount">2/10</div>
            <img className="customerInteraction" height="100px" width="100px" alt="" src={`characters/${image}`} />
            <img className="john" height="100px" width="100px" alt="" src={`characters/john.png`} />
            </div>
            
            <div className={`conversation ${longDiv}`} id="style-3" >
                <Conversation id="container3" count={count} index={currentIndex}/>
                <div ref={messageEndRef} ></div>
            </div>

            <Button className={hidden} onClick={ () => {
                updateCount((currentIndex===1)?count+1:count); 
                updateIndex((currentIndex===1)?0:1);
                updateHidden((count===length-1)?'isHidden':'');
                updateDiv((count===length-1)?'longDiv':'')
            } } variant="next">NEXT
            </Button>
        </div>
        </>
    );
}

const popover = (
    <Popover id="popover-basic">
        <Popover.Content>
            <h4>INFORMATION</h4>
            <div className="row">
                <div className="col-md-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
                <div className="col-md-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
                <div className="col-md-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
            </div>
        </Popover.Content>
    </Popover>
  );

const Conversation = (props) => {
    let wholeCon = CONVERSATION;
    let convo = [];
    const styles = {
        fadeInDown: {
          animation: 'x 0.8s',
          animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
        }
    }
    for (let i=0; i<=props.count; i++) {
        if (i>1 && props.count===i) {//show one at a time
            if (props.index === 0) {
                convo.push(
                    <StyleRoot>
                    <div key={i} style={styles.fadeInDown} className="divOverflow" >
                        <div className="convo1">
                            <div className="callout isOrange">{ wholeCon[i].john.toUpperCase() }</div>
                            <div className="bgConvo-left right"><img className="johnImage isOrange" alt="" src={`characters/john.png`} /></div>
                        </div>
                    </div>
                    </StyleRoot>
                );
            } else {
                convo.push(
                    <StyleRoot>
                    <div key={i} className="divOverflow" >
                        <div className="convo1">
                            <div className="callout isOrange">{ wholeCon[i].john.toUpperCase() }</div>
                            <div className="bgConvo-left right"><img className="johnImage isOrange" alt="" src={`characters/john.png`} /></div>
                        </div>
                        <div style={styles.fadeInDown} className="convo2">
                        <div className="callout isGreen right">{ wholeCon[i].customer.toUpperCase() }</div>
                            <div className="bgConvo-right"><img className="johnImage isGreen" alt="" src={`characters/1.png`} /></div>
                        </div>
                    </div>
                    </StyleRoot>
                );
            }
            
        } else {
            convo.push(
                <div key={i}  className="divOverflow" >
                    <div className="convo1">
                        <div className="callout isOrange">{ wholeCon[i].customer.toUpperCase() }</div>
                        <div className="bgConvo-left right"><img className="johnImage isOrange" alt="" src={`characters/john.png`} /></div>
                    </div>
                    <div className="convo2">
                    <div className="callout isGreen right">{ wholeCon[i].john.toUpperCase() }</div>
                        <div className="bgConvo-right"><img className="johnImage isGreen" alt="" src={`characters/1.png`} /></div>
                    </div>
                </div>
            );
        }
        
    }

    return convo;
}
  