import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip  from 'react-bootstrap/Tooltip';
import Clock from './Clock';
import { player, buttonTitles } from '../../customer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Distractors({active}) {
    return (
        <div className="col col-md-1 distractors">
            <div className="timer distract"> <Clock active={active}/></div>
            <span className="distract">
                <div className="class2"><CurrentDate/></div>
                <LazyLoadImage placeholderSrc={`calendar.png`} effect="blur" alt="" style={{width:'5vw'}} src={`calendar.png`} />
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
    // let monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']
    let currentDate = new Date();
    // let month = monthNames[currentDate.getMonth()];
    let date = currentDate.getDate();

    // let actualDate = `${month}. ${date}`;
    let actualDate = `${date}`;
    return (
        <>{actualDate}</>
    );
}
