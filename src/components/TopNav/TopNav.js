import React, { Component, useEffect, forwardRef } from 'react'
import './topnav.css';
import CustomerList from './Customers';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popover from 'react-bootstrap/Popover';
import { doneCustomers, logo } from '../../customer';

export default class TopNav extends Component {
    btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    render() {
        return (
          <div className="row grid-top-nav">
            <div className="col-md-4" style={{ paddingRight: 0 }}>
              <div className="col-md-12 interaction">
                <img src={logo} alt="" style={{width:'100px', float: 'left', marginTop: '3%'}}/>
              <OverlayTrigger trigger="click" rootClose placement="right" overlay={<PopoverComponent data={this.props.active}/>}>
                  <span className="fa-layers fa-fw information">
                      <FontAwesomeIcon icon="circle" size="lg" color="red" />
                      <FontAwesomeIcon icon="info" inverse size="sm"/>
                  </span>
              </OverlayTrigger>
              <div className="currentCount">{doneCustomers.length+1}/{this.props.total}</div>
              <img className="customerInteraction" height="100%" width="76px" alt="" src={`characters/${this.props.active.image}`} />
              {/* <img className="john" height="100px" width="100px" alt="" src={`characters/john.png`} /> */}
              </div>
            </div>
            <div className="col-md-8 col-top-nav" >
            <CustomerList done={this.props.done} active={this.props.active} updateActive={this.props.updateActive} />
            </div>
          </div>
        )
    }
}

const PopoverComponent = forwardRef(
  ({ scheduleUpdate, children, ...props }, ref) => {
    useEffect(() => {
      scheduleUpdate();
    }, [children, scheduleUpdate]);
    return (
      <Popover ref={ref} id="popover-basic" {...props}>
        <Popover.Content>
            <h4>INFORMATION</h4>
            <div className="popoverRow row">
                <div className="col-md-4" style={{textAlign: 'center'}}>
                <img className="" height="100%" alt="" src={`characters/${props.data.image}`} />
                  
                </div>
                <div className="col-md-4">
                <b>Name:</b> {props.data.name}<br/>
                <b>Age: </b> {props.data.age}
                </div>
                <div className="col-md-4">
                "{props.data.text}"
                </div>
            </div>
        </Popover.Content>
    </Popover>
    );
  },
);