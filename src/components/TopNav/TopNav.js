import React, { Component } from 'react'
import './topnav.css';
import CustomerList from './Customers';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popover from 'react-bootstrap/Popover';

export default class TopNav extends Component {
    btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    render() {
        return (
          <div className="row grid-top-nav">
            <div className="col-md-4" style={{ paddingRight: 0 }}>
              <div className="col-md-12 interaction">
              <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
                  <span className="fa-layers fa-fw">
                      <FontAwesomeIcon icon="circle" size="lg" color="red" />
                      <FontAwesomeIcon icon="info" inverse size="sm"/>
                  </span>
              </OverlayTrigger>
            <div className="currentCount">{this.props.active.id}/{this.props.total}</div>
              <img className="customerInteraction" height="100%" width="76px" alt="" src={`characters/${this.props.active.image}`} />
              <img className="john" height="100px" width="100px" alt="" src={`characters/john.png`} />
              </div>
            </div>
            <div className="col-md-8 col-top-nav" >
            <CustomerList />
            </div>
          </div>
        )
    }
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