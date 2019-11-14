import React, { Component } from 'react'
import './topnav.css';
import CustomerList from './Customers';

export default class TopNav extends Component {
    btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    render() {
        return (
          <div className="row grid-top-nav">
            <div className="col-md-12 col-top-nav" >
            <CustomerList />
            </div>
          </div>
        )
    }
}