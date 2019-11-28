import React, { useState, useEffect, useRef } from 'react'
import './mainnav.css';
import { convoR, currentCustomer } from '../../customer';
import Button from 'react-bootstrap/Button';
import Conversation from './Conversation';

export default function Interaction() {

    const [count, updateCount] = useState(1);
    const [currentIndex, updateIndex] = useState(1);
    const [hidden, updateHidden] = useState('');
    const [longDiv, updateDiv] = useState('');
    const [disabled, updateDisabled] = useState(false);
    const messageEndRef = useRef(null);
    const current = [];
    Object.keys(convoR).forEach(function(key) {
        if (parseInt(key) === currentCustomer) current.push(convoR[key]);
    });
    let wholeCon = current[0];
    let length = wholeCon.length-1;
    const scrollToBottom = () => {
        if (count>1)
            messageEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
            
            <div className={`conversation ${longDiv}`} id="style-3" >
                <div className="divOverflow" >
                    <Conversation wholeCon={wholeCon} id="container3" count={count} key="1" index={currentIndex}/>
                </div>
                <div id="reference1" ref={messageEndRef} ></div>
            </div>
            
            <Button className={hidden} disabled={disabled} onClick={ () => {
                updateCount(count+1); 
                updateIndex((currentIndex===1)?0:1);
                updateHidden((count===length-1)?'isHidden':'');
                updateDiv((count===length-1)?'longDiv':'');
                updateDisabled((typeof(wholeCon[count+1])!=='object' ? true : false))
            } } variant="next">NEXT
            </Button>
        </div>
        </>
    );
}
