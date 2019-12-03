import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CUSTOMERS } from '../../customer';
import generateKey from '../Key';
import { StyleRoot } from 'radium';
import { styles } from '../animationStyles';

export default function CarouselItem(props) {
    const {active} = props;
    let cs = [];
    for (let j=0; j<props.array.length; j++) {
        cs.push(
            <span key={generateKey()} className="customer-list">
                <ProgressBar  key={generateKey()}>
                    <ProgressBar  variant="loading" now={33.33} />
                    <ProgressBar  variant="loading" now={33.33} />
                    <ProgressBar  variant="done" now={33.33}  />
                </ProgressBar>
                <RenderImage activeId={active.id} idKey={j} key={generateKey()} image={CUSTOMERS[j].image}/>
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