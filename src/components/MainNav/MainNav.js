import React, { useState } from 'react'
import './mainnav.css';
// import Clock from 'react-clock/'
import Clock from './Clock';
import Interaction from './Interaction';
import Webobject from './Webobject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip  from 'react-bootstrap/Tooltip';

export default function MainNav(props) {
    const [isOn, turnOn] = useState(false); //Start toggle
    const [hasTill, updateTill] = useState(false); //TILL toggle
    const [element, updateEl] = useState(null); //element shown on TILL
    const [tillBtnClick, updateTillClick] = useState(false); 
    const { active, next } = props;
    return (
        <div className="row grid-main-nav">
            <Interaction active={active} on={isOn} turnOn={() => {turnOn(true)}} next={next} updateTill={ (val)=>{ updateTill(val) } } tillBtnClick={tillBtnClick} updateEl={(val)=>{updateEl(val)}} updateTillClick={(val)=>{updateTillClick(val)}} />
            <Webobject active={active} on={isOn} till={hasTill} updateTillClick={(val)=>{updateTillClick(val)}} updateEl={(val)=>{updateEl(val)}} element={element}/>

            <div className="col col-md-1 distractors">
                <div className="timer clock"> <Clock /></div>
                <span>
                    <div className="class2"><CurrentDate/></div>
                    <FontAwesomeIcon inverse size="4x" icon="calendar" />
                </span>

                <OverlayTrigger trigger="hover" placement="left" overlay={ 
                    <Tooltip >
                        Job Aids
                    </Tooltip> }>
                    <span style={{cursor: 'pointer'}}>
                    <FontAwesomeIcon  onClick={btnClick.bind(this, 'job aids')} color="#00c555 " size="4x" icon="book" className="distractorFont"/>
                    </span>
                </OverlayTrigger>

                <OverlayTrigger trigger="hover" placement="left" overlay={
                    <Tooltip >
                        Tutorial
                    </Tooltip> }>
                    <span style={{cursor: 'pointer'}}>
                    <FontAwesomeIcon  onClick={btnClick.bind(this, 'tutorial')} size="4x" icon="question-circle" className="distractorFont"/>
                    </span>
                </OverlayTrigger>

            </div>
        </div>
    )
}
const btnClick = (pos) => {
    switch(pos) {
        
    }
    // alert(`${pos} clicked`);
}
function renderTooltip(props) {
    console.log(props);
    return <Tooltip {...props}>Job Aids</Tooltip>;
}
function renderTooltip2(props) {
    return <Tooltip {...props}></Tooltip>;
}
const CurrentDate = () => {
    let monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']
    let currentDate = new Date();
    let month = monthNames[currentDate.getMonth()];
    let date = currentDate.getDate();

    let actualDate = `${month}. ${date}`;
    return (
        <>{actualDate}</>
    );
}

