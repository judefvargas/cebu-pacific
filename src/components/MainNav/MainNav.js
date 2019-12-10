import React, { useState } from 'react'
import './mainnav.css';
import Interaction from './Interaction';
import Webobject from './Webobject';
import Distractors from './Distractors';

export default function MainNav(props) {
    const [isOn, turnOn] = useState(false); //Start toggle
    const [hasTill, updateTill] = useState(false); //TILL toggle
    const [element, updateEl] = useState(null); //element shown on TILL
    const [tillBtnClick, updateTillClick] = useState(false); 
    const { active, next } = props;
    return (
        <div className="row grid-main-nav">
            <Interaction active={active} on={isOn} turnOn={() => {turnOn(true)}} next={next} updateTill={ (val)=>{ updateTill(val) } } tillBtnClick={tillBtnClick} updateEl={(val)=>{updateEl(val)}} updateTillClick={(val)=>{updateTillClick(val)}} />
            <Webobject active={active} tillBtnClick={tillBtnClick} on={isOn} till={hasTill} updateTillClick={(val)=>{updateTillClick(val)}} updateEl={(val)=>{updateEl(val)}} element={element}/>

            <Distractors />
        </div>
    )
}
