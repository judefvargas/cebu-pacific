import React, { Component, useState } from 'react'
import { CUSTOMERS } from '../../customer';
import Carousel from 'react-bootstrap/Carousel';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './topnav.css';

export default class CustomerList extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            nextBtn: <FontAwesomeIcon icon='caret-right' className='caret' size='2x' />,
            prevBtn: <FontAwesomeIcon icon="caret-left" className="caret caretLeft" size="2x" />,
            interval: null,
            indicators: false,
        }
    }

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
            <ProcessCarousel/>
            </>
        );
    }
}


const ProcessCarousel = (props) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
    let temparray = [];
    let allChunks = [];
    let i, j;

    let nextBtn = <FontAwesomeIcon icon='caret-right' className='caret' size='2x' />;
    let prevBtn = <FontAwesomeIcon icon="caret-left" className="caret caretLeft" size="2x" />;
    let interval = null;
    let indicators = false;

    let chunk = 10;
    let carousel = [];
    for (i=0,j=CUSTOMERS.length; i<j; i+=chunk) {
        temparray = CUSTOMERS.slice(i,i+chunk);
        allChunks.push(temparray);
    }
    for (let i=0; i<allChunks.length; i++) {
        carousel.push(
            <Carousel.Item className={props.currentActive===i ? 'carousel-item active' : 'carousel-item' } key={i} >
                <span className="col-md-10"><CarouselItem array={allChunks[i]} /></span>
            </Carousel.Item>)
    }

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={interval} indicators={indicators} nextIcon={nextBtn} prevIcon={prevBtn}>
        { carousel }
        </Carousel>
    );

}

const CarouselItem = (props) => {
    const btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    let cs = [];
    for (let j=0; j<props.array.length; j++) {
        if (j>=5) {
            cs.push(
                <span key={j} className="customer-list">
                    <ProgressBar  key={j}>
                        <ProgressBar  variant="done" now={33.33} key={j} />
                        <ProgressBar  variant="done" now={33.33} key={j+1} />
                        <ProgressBar  variant="done" now={33.33} key={j+2} />
                    </ProgressBar>
                    <span className="customerSpan">
                        <img key={j} className="customerImage customerGrayImage" alt="" src={`characters/${CUSTOMERS[j].image}`} />
                    </span>
                </span>);
        } else {
            cs.push(
                <span key={j} className="customer-list">
                    <ProgressBar  key={j}>
                        <ProgressBar  variant="loading" now={33.33} key={j} />
                        <ProgressBar  variant="loading" now={33.33} key={j+1} />
                        <ProgressBar  variant="done" now={33.33} key={j+2} />
                    </ProgressBar>
                    <span className="customerSpan">
                        <img onClick={btnClick.bind(this, 'customer')} key={j} className="customerImage" alt="" src={`characters/${CUSTOMERS[j].image}`} />
                    </span>
                </span>);
        }
    }
    return cs;
}