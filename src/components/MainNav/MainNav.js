import React, { Component } from 'react'
import './mainnav.css';
// import Clock from 'react-clock/'
import Clock from './Clock';
import Interaction from './Interaction';
import Webobject from './Webobject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class MainNav extends Component {
    btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    render() {
        return (
            <div className="row grid-main-nav">
                <Interaction/>
                <Webobject/>

                <div className="col col-md-1 distractors">
                    <div className="timer clock"> <Clock /></div>
                    {/* timezone={'Asia/Manila'} */}
                    {/*  */}
                    <span >
                    <div className="class2"><CurrentDate/></div>
                        <FontAwesomeIcon inverse size="5x" icon="calendar" />
                    </span>
                    {/* <Calendar/> */}
                    <div onClick={this.btnClick.bind(this, 'job aids')} className="calloutRight">JOB AIDS</div>
                </div>
            </div>
        )
    }
}

const CurrentDate = () => {
    let monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']
    let currentDate = new Date();
    let month = monthNames[currentDate.getMonth()];
    let date = currentDate.getDate();
    // let year = currentDate.getFullYear();

    let actualDate = `${month}. ${date}`;
    return (
        <>{actualDate}</>
    );
}

