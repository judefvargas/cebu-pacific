import React, { Component } from 'react'
import './mainnav.css';
import Clock from 'react-clock'
import Interaction from './Interaction';
import Button from 'react-bootstrap/Button';

export default class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 80
        }
    }
    btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    render() {
        return (
            <div className="row grid-main-nav">
                <Interaction/>
                <WebObject/>

                <div className="col col-md-1 distractors">
                    <div className="clock"> <Clock size={this.state.size} value={new Date()}/></div>
                    <div><CurrentDate/></div>
                    <div onClick={this.btnClick.bind(this, 'job aids')} className="calloutRight">JOB AIDS</div>
                </div>
            </div>
        )
    }
}

const CurrentDate = () => {
    let currentDate = new Date();
    let month = currentDate.getMonth();
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();

    let actualDate = `${month}/${date}/${year}`;
    return (
        <>{actualDate}</>
    );
}

const WebObject = () => {
    const btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    return (
        <div className="col col-md-9 weboject">
            <div className="mainNavBtns">
                <Button onClick={btnClick.bind(this, 'web object button')} bsPrefix="btn btn-info btn-lg jBtn1" size="lg" variant="info">Jewelry</Button>
                <Button onClick={btnClick.bind(this, 'web object button')} bsPrefix="btn btn-info btn-lg jBtn1" size="lg" variant="info">T</Button>
                <Button onClick={btnClick.bind(this, 'web object button')} bsPrefix="btn btn-info btn-lg jBtn1" size="lg" variant="info">I</Button>
                <Button onClick={btnClick.bind(this, 'web object button')} bsPrefix="btn btn-info btn-lg jBtn1" size="lg" variant="info">L</Button>
                <Button onClick={btnClick.bind(this, 'web object button')} bsPrefix="btn btn-info btn-lg jBtn1" size="lg" variant="info">L</Button>
            </div>
        </div>
    );
}
