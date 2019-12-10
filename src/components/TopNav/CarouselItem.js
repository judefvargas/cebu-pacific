import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import { CUSTOMERS } from '../../customer';
import generateKey from '../Key';
// import { StyleRoot } from 'radium';
import { styles } from '../animationStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CarouselItem(props) {
    const {active} = props;
    const actualArr = search(active.id, props.array);
    let cs = [];
    for (let j=0; j<actualArr.length; j++) {
        cs.push(
            <span key={generateKey()} className="customer-list">
                <ProgressBar  key={generateKey()}>
                    <ProgressBar  variant="loading" now={33.33} />
                    <ProgressBar  variant="loading" now={33.33} />
                    <ProgressBar  variant="done" now={33.33}  />
                </ProgressBar>
                <RenderImage done={props.done} activeId={active.id} idKey={j} key={generateKey()} image={actualArr[j].image} id={actualArr[j].id}/>
            </span>
        );
    }
    return cs;
}

const search = (value, array) => {
    let arr = array.filter((object) => (parseInt(object.id) !== parseInt(value)) );
    return arr;
}

const RenderImage = (props) => {
    const btnClick = (pos) => {
        alert(`${pos} clicked`);
    }
    let imageSpan = [];
console.log(props.done.indexOf(props.id));
    if (props.idKey===1) {
        imageSpan.push(<span>
            { (props.done.indexOf(props.id) > -1) ?
            (<span className="fa-layers fa-fw checkmark">
                <FontAwesomeIcon icon="square" className="squareCheck" color="green" size="lg" />
                <FontAwesomeIcon icon="check" inverse color="green"  size=""/>
            </span>) : '' }
            <span className={`customerSpan `} style={styles.pulse}>
                <img onClick={btnClick.bind(this, 'customer')} key={props.idKey} className={`customerImage ${ (props.idKey>=5 ? 'customerGrayImage': '') }`} alt="" src={`characters/${props.image}`} />
            </span>
        </span>)
    } else {
        imageSpan.push(<span>
            { (props.done.indexOf(props.id) > -1) ?
            (<span className="fa-layers fa-fw checkmark">
                <FontAwesomeIcon icon="square" className="squareCheck" color="green" size="lg" />
                <FontAwesomeIcon icon="check" inverse color="green"  size=""/>
            </span>) : '' }
            <span className={`customerSpan `}>
                <img onClick={btnClick.bind(this, 'customer')} key={props.idKey} className={`customerImage ${ (props.idKey>=5 ? 'customerGrayImage': '') }`} alt="" src={`characters/${props.image}`} />
            </span>
        </span>);
    }
    return imageSpan;
}