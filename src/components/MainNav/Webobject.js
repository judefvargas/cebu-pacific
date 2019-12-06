import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { fadeInDown } from 'react-animations';
// import Radium, {StyleRoot} from 'radium';
import {StyleRoot} from 'radium';
import { styles } from '../animationStyles';

export default function Webobject(props) {
    const [element, updateEl] = useState('');
    const { active, on } = props;
    return (
        <>
        <style type="text/css">
            {`
            .btn-till {
                background-color: #7bf1f1;
                margin: 2%;
                padding: 2% !important;
                width: 8vw;
                cursor: pointer;
                font-size: 1.5rem;
                line-height: 1.5;
                border-radius: .3rem;
            }
            .btn-till:hover {
                text-decoration: none;
                background-color: #60d4d4;
            }
            .btn-till:active, .btn-till:focus {
                text-decoration: none;
                background-color: #4dbdbd !important;
            }
            .btn-jewelry {
                background-color: #86b97e;
                margin: 2%;
                padding: 2% !important;
                width: 8vw;
                cursor: pointer;
                font-size: 1.2rem;
                line-height: 1.5;
                border-radius: 18px;
            }
            `}
        </style>
        <div className="col col-md-7 weboject">
            <div className="mainWebObject">
                {on ? 
                // <StyleRoot>
                    <img className="webObjImage" src={active.package} alt=""/>
                // </StyleRoot> 
                : ( <ShowObject element={element}/>)}
            </div>
            <div className="mainNavBtns">
                <Button onClick={() => {updateEl('Money Changing')}} size="lg" variant="jewelry">Money Changing</Button>
                <Button  onClick={() => {updateEl('T')}} size="lg" variant="till">T</Button>
                <Button  onClick={() => {updateEl('I')}} size="lg" variant="till">I</Button>
                <Button  onClick={() => {updateEl('L')}} size="lg" variant="till">L</Button>
                <Button  onClick={() => {updateEl('L')}} size="lg" variant="till">L</Button>
            </div>
        </div>
        </>
    );
}

const ShowObject = (props) => {
    // const styles = {
    //     fadeInDown: {
    //         animation: 'x 0.8s',
    //         animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    //     }
    // }
    return (
        <StyleRoot>
            <div ><div className="element">{props.element}</div></div>
        </StyleRoot>
    );
}