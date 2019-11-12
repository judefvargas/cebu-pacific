import React, { Component } from 'react'
import './mainnav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CUSTOMERS, CONVERSATION } from '../../customer';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Clock from 'react-live-clock';

export default class MainNav extends Component {
    btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    render() {
        return (
            <div className="row grid-main-nav">
                <Interaction/>
                <WebObject/>

                <div className="col col-md-1 distractors">
                    <div onClick={this.btnClick.bind(this, 'clock')} className="calloutRight"> <Clock format={'h:mm A'} ticking={true} /></div>
                    <div onClick={this.btnClick.bind(this, 'calendar')} className="calloutRight calendar"><CurrentDate/></div>
                    <div onClick={this.btnClick.bind(this, 'job aids')} className="calloutRight">JOB AIDS</div>
                </div>
            </div>
        )
    }
}

const CurrentDate = () => {
    let currentDate = new Date();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    let month = monthNames[currentDate.getMonth()];
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();

    let actualDate = `${month} ${date}, ${year}`;
    return (
        <>{actualDate}</>
    );
}

const Interaction = () => {
    const btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    let { image } = CUSTOMERS[1];
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
            <div className="conversation" id="style-3">
                <Conversation/>
            </div>
            <Button onClick={btnClick.bind(this, 'next')} variant="next">NEXT</Button>
        </div>
        </>
    );
}

const WebObject = () => {
    return (
        <div className="col col-md-9 weboject">
        </div>
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

const Conversation = () => {
    let wholeCon = CONVERSATION;
    let convo = [];
    for (let i=0; i<wholeCon.length; i++) {
        convo.push(
            <div key={i} className="divOverflow" >
                <div className="callout isOrange">{ wholeCon[i].customer.toUpperCase() }</div>
                    <div className="bgConvo-left right"><img className="johnImage isOrange" alt="" src={`characters/john.png`} /></div>
                <div className="callout isGreen right">{ wholeCon[i].john.toUpperCase() }</div>
                    <div className="bgConvo-right"><img className="johnImage isGreen" alt="" src={`characters/1.png`} /></div>
            </div>
        );
    }

    return convo;
}
  