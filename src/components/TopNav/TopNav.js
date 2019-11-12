import React, { Component } from 'react'
import './topnav.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CUSTOMERS } from '../../customer';

export default class TopNav extends Component {
    btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    render() {
        return (
          <>
          <style type="text/css">
              {`
              .bg-loading {
                background-color: #00ff00;
              }
              .bg-done {
                background-color: #707070;
              }
              `}
            </style>
          <div className="row grid-top-nav">
            <div className="col-md-12 col-top-nav">
              <FontAwesomeIcon icon="caret-left" className="caret caretLeft" onClick={this.btnClick.bind(this, 'left button')} size="2x" />
                  <span className="col-md-10"> <Customers /></span>
              <FontAwesomeIcon icon="caret-right" className="caret" size="2x" onClick={this.btnClick.bind(this, 'right button')} />
            </div>
          </div>
          </>
        )
    }
}

const Customers = () => {
    const btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    let images = [];
    for (let i=0; i<10; i++) {
        if (i>=5) {
            images.push(
                <span key={i} className="customer-list">
                    <ProgressBar  key={i}>
                        <ProgressBar  variant="done" now={33.33} key={i} />
                        <ProgressBar  variant="done" now={33.33} key={i+1} />
                        <ProgressBar  variant="done" now={33.33} key={i+2} />
                    </ProgressBar>
                    <span className="customerSpan">
                        <img key={i} className="customerImage customerGrayImage" alt="" src={`characters/${CUSTOMERS[i].image}`} />
                    </span>
                </span>);
        } else {
            images.push(
                <span key={i} className="customer-list">
                    <ProgressBar  key={i}>
                        <ProgressBar  variant="loading" now={33.33} key={i} />
                        <ProgressBar  variant="loading" now={33.33} key={i+1} />
                        <ProgressBar  variant="done" now={33.33} key={i+2} />
                    </ProgressBar>
                    <span  onClick={btnClick.bind(this, 'customer')} className="customerSpan">
                        <img key={i} className="customerImage" alt="" src={`characters/${CUSTOMERS[i].image}`} />
                    </span>
                </span>);
        }
        
    }
    return images;
}
