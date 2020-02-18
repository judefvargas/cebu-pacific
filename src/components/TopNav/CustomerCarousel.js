import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CUSTOMERS } from '../../customer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import generateKey from '../Key';
import CarouselItem from './CarouselItem';

export default function CustomerCarousel(props) {
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
    let controls = false;
    
    let chunk = 10;
    let carousel = [];
    for (i=0,j=CUSTOMERS.length; i<j; i+=chunk) {
        temparray = CUSTOMERS.slice(i,i+chunk);
        allChunks.push(temparray);
    }
    for (let i=0; i<allChunks.length; i++) {
        carousel.push(
            <Carousel.Item className={props.currentActive===i ? 'carousel-item active' : 'carousel-item' } key={generateKey()} >
                <span key={generateKey()} className="col-md-10"><CarouselItem {...props} key={generateKey()} array={allChunks[i]} /></span>
            </Carousel.Item>)
    }

    if(allChunks.length===1) {
        additionalClass = 'isHidden';
    }
    let nextBtn = <FontAwesomeIcon icon='caret-right' className={`caret ${additionalClass}`} size='2x' />;
    let prevBtn = <FontAwesomeIcon icon="caret-left" className={`caret caretLeft ${additionalClass}`} size="2x" />;

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} controls={controls} interval={interval} indicators={indicators} nextIcon={nextBtn} prevIcon={prevBtn}>
        { carousel }
        </Carousel>
    );

}