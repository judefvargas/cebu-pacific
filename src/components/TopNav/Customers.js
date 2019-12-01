import React, { Component, useState } from 'react'
import { CUSTOMERS } from '../../customer';
import Carousel from 'react-bootstrap/Carousel';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './topnav.css';
import { StyleRoot } from 'radium';
import { styles } from '../animationStyles';
import generateKey from '../Key';

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

    let additionalClass = '';
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
            <Carousel.Item className={props.currentActive===i ? 'carousel-item active' : 'carousel-item' } key={generateKey()} >
                <span key={generateKey()} className="col-md-10"><CarouselItem key={generateKey()} array={allChunks[i]} /></span>
            </Carousel.Item>)
    }

    if(allChunks.length===1) {
        additionalClass = 'isHidden';
    }
    let nextBtn = <FontAwesomeIcon icon='caret-right' className={`caret ${additionalClass}`} size='2x' />;
    let prevBtn = <FontAwesomeIcon icon="caret-left" className={`caret caretLeft ${additionalClass}`} size="2x" />;
   

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={interval} indicators={indicators} nextIcon={nextBtn} prevIcon={prevBtn}>
        { carousel }
        </Carousel>
    );

}

const CarouselItem = (props) => {
    
    let cs = [];
    for (let j=0; j<props.array.length; j++) {
        cs.push(
            <span key={generateKey()} className="customer-list">
                <ProgressBar  key={generateKey()}>
                    <ProgressBar  variant="loading" now={33.33} />
                    <ProgressBar  variant="loading" now={33.33} />
                    <ProgressBar  variant="done" now={33.33}  />
                </ProgressBar>
                <RenderImage idKey={j} key={generateKey()} image={CUSTOMERS[j].image}/>
            </span>
        );
    }
    return cs;
}

const RenderImage = (props) => {
    const btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    let imageSpan = [];

    if (props.idKey===1) {
        imageSpan.push(
            <StyleRoot className="classAB">
                <span className={`customerSpan ${ (props.idKey===1 ? 'customerActive' : '') }`} style={styles.pulse}>
                    <img onClick={btnClick.bind(this, 'customer')} key={props.idKey} className={`customerImage ${ (props.idKey>=5 ? 'customerGrayImage': '') }`} alt="" src={`characters/${props.image}`} />
                </span>
            </StyleRoot>
        )
    } else {
        imageSpan.push(
            <span className={`customerSpan ${ (props.idKey===1 ? 'customerActive' : '') }`}>
                <img onClick={btnClick.bind(this, 'customer')} key={props.idKey} className={`customerImage ${ (props.idKey>=5 ? 'customerGrayImage': '') }`} alt="" src={`characters/${props.image}`} />
            </span>
        );
    }
    return imageSpan;
}