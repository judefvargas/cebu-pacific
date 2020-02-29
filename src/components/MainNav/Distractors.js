import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip  from 'react-bootstrap/Tooltip';
import Clock from './Clock2';
import { player, buttonTitles } from '../../customer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Distractors({active}) {
  return (
    <div className="col col-md-1 distractors">
      <div className="timer distract"> <Clock active={active}/></div>
      <span className="distract">
        <Calendar active={active}/>
      </span>

      <OverlayTrigger trigger="hover" placement="left" overlay={ 
        <Tooltip >
          { buttonTitles.job_aids }
        </Tooltip> }>
        <span style={{cursor: 'pointer'}}>
          <LazyLoadImage onClick={btnClick.bind(this, 'job aids')} placeholderSrc={`book.png`} src={`book.png`} effect="blur" alt="" style={{width:'5vw', padding:'2vh 0'}} />
        </span>
      </OverlayTrigger>

      <OverlayTrigger trigger="hover" placement="left" overlay={
        <Tooltip >
          { buttonTitles.tutorial }
        </Tooltip> }>
        <span style={{cursor: 'pointer'}}>
          <LazyLoadImage onClick={btnClick.bind(this, 'tutorial')} src={`gmark.png`}  placeholderSrc={`gmark.png`} effect="blur" alt="" style={{width:'5vw'}} />
        </span>
      </OverlayTrigger>
    </div>
  )
}
const btnClick = (pos) => {
  switch(pos) {
    case 'job aids':
      player.SetVar('CHAT_showJobAids', true);
      break;
    case 'tutorial':
      player.SetVar('CHAT_showTutorial', true);
      break;
    default:
      break;
  }
}

const Calendar = ({active}) => {
  let monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  let date = new Date(active.date);
  let day = date.getDate();
  let month = date.getMonth();
  let actualMonth = monthNames[month];

  return (
    <><div className="actualMonth">{actualMonth}</div><div className="class2">
      {day}
    </div><LazyLoadImage placeholderSrc={`calendar.png`} effect="blur" alt="" style={{width:'5vw'}} src={`calendar.png`} /></>
  );
}
