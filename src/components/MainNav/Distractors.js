import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip  from 'react-bootstrap/Tooltip';
import Clock from './Clock';
import {player} from '../../customer';

export default function Distractors() {
    return (
        <div className="col col-md-1 distractors">
            <div className="timer distract"> <Clock /></div>
            <span className="distract">
                <div className="class2"><CurrentDate/></div>
                <img alt="" src="calendar.png" style={{width:'5vw'}} />
                {/* <FontAwesomeIcon inverse size="4x" icon="calendar" /> */}
            </span>

            <OverlayTrigger trigger="hover" placement="left" overlay={ 
                <Tooltip >
                    Job Aids
                </Tooltip> }>
                <span style={{cursor: 'pointer'}}>
                    <img alt="" onClick={btnClick.bind(this, 'job aids')} src="book.png" style={{width:'5vw', padding:'2vh 0'}} />
                </span>
            </OverlayTrigger>

            <OverlayTrigger trigger="hover" placement="left" overlay={
                <Tooltip >
                    Tutorial
                </Tooltip> }>
                <span style={{cursor: 'pointer'}}>
                    <img alt="" onClick={btnClick.bind(this, 'tutorial')} src="gmark.png" style={{width:'5vw'}} />
                </span>
            </OverlayTrigger>
        </div>
    )
}
const btnClick = (pos) => {
    switch(pos) {
        case 'job aids':
            player.SetVar('CARGO_showJobAids', true);
            break;
        case 'tutorial':
            player.SetVar('CARGO_showTutorial', true);
            break;
        default:
            break;
    }
}

const CurrentDate = () => {
    let monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']
    let currentDate = new Date();
    // let month = monthNames[currentDate.getMonth()];
    let date = currentDate.getDate();

    // let actualDate = `${month}. ${date}`;
    let actualDate = `${date}`;
    return (
        <>{actualDate}</>
    );
}
