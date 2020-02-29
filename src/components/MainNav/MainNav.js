import React, { useState, useEffect, } from 'react'
import './mainnav.css';
import Interaction from './Interaction';
import Webobject from './Webobject';
import Distractors from './Distractors';
import { player, shouldStart, restart, } from '../../customer';

export default function MainNav(props) {
  let currentConversation = JSON.parse(player.GetVar('CHAT_currentConvoPos'));
  
  const [isOn, turnOn] = useState(false); //Start toggle

  useEffect(() => {
    if ((currentConversation!==null && currentConversation.length!==0) || shouldStart) {
      turnOn(true);
    }
  }, [])

  useEffect(() => {
    console.log(restart);
    if (restart) {
      console.log('has restarted')
      player.SetVar('CHAT_currentConvoPos', '[]');
      player.SetVar('CHAT_indexTracking', '[]');
      player.SetVar('CHAT_totalScore', 0);
      turnOn(false);
    }
  }, [restart])
  const [hasTill, updateTill] = useState(false); //TILL toggle
  const [element, updateEl] = useState(null); //element shown on TILL
  const [tillBtnClick, updateTillClick] = useState(false); 
  const { active, next, done, } = props;

  return (
    <div className="row grid-main-nav">
      <Interaction 
        active={active} 
        on={isOn} 
        turnOn={() => {turnOn(true)}} 
        next={next}
        done={done}
        updateTill={ (val)=>{ updateTill(val) } } 
        tillBtnClick={tillBtnClick} 
        updateEl={(val)=>{updateEl(val)}} 
        updateTillClick={(val)=>{updateTillClick(val)}} />

      <Webobject 
        active={active} 
        tillBtnClick={tillBtnClick} 
        on={isOn} 
        till={hasTill} 
        updateTillClick={(val)=>{updateTillClick(val)}} 
        updateEl={(val)=>{updateEl(val)}} 
        element={element}/>

      <Distractors active={active} />
    </div>
  )
}
