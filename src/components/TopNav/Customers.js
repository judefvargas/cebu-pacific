import React from 'react'
import './topnav.css';
import CustomerCarousel from './CustomerCarousel';

export default function CustomerList (props) {
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
        <CustomerCarousel done={props.done} active={props.active}/>
        </>
    );
}