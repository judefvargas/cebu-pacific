import React, { useEffect, forwardRef } from 'react'
import './topnav.css';
import CustomerList from './Customers';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popover from 'react-bootstrap/Popover';
import { logo } from '../../customer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function TopNav(props) {
    let { done } = props;

    return (
      <div className="row grid-top-nav">
        <div className="col-md-4" style={{ paddingRight: 0 }}>
          <div className="col-md-12 interaction">
            <img src={logo} alt="" style={{width:'68px', float: 'left', marginTop: '3%'}}/>
            <OverlayTrigger trigger="click" rootClose placement="right" overlay={<PopoverComponent data={props.active}/>}>
              <span className="fa-layers fa-fw information">
                <FontAwesomeIcon icon="circle" size="lg" color="red" />
                <FontAwesomeIcon icon="info" inverse size="sm"/>
              </span>
          </OverlayTrigger>
          <div className="currentCount">{done.length+1}/{props.total}</div>
          <LazyLoadImage placeholderSrc={`characters/${props.active.image}`} effect="blur" className="customerInteraction" height="100%" width="76px" src={`characters/${props.active.image}`} alt=""/>
          </div>
        </div>
        <div className="col-md-8 col-top-nav" >
            <CustomerList {...props} updateActive={props.updateActive} />
        </div>
      </div>
    )
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
                <div className="col-md-2" style={{textAlign: 'center'}}>
                <img className="" height="100%" alt="" src={`characters/${props.data.image}`} />
                  
                </div>
                <div className="col-md-2">
                <b>Name:</b> {props.data.name}<br/>
                <b>Age: </b> {props.data.age}
                </div>
                <div className="col-md-8">
                "{props.data.text}"
                </div>
            </div>
        </Popover.Content>
    </Popover>
    );
  },);