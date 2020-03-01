import React from 'react'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {StyleRoot} from 'radium';
import { player, showCurrencies, buttons, tillArray, allowImgClick } from '../../customer';
import generateKey from '../Key';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Webobject(props) {
    const { active, on, updateTillClick, updateEl, element, tillBtnClick } = props;
    const updateElement = () => {
        player.SetVar('CHAT_showTill', true);
        updateTillClick(true);
    }
    return (
        <>
        <div className="col col-md-4 weboject">
            <div className="mainWebObject">
                { on ?
                <ListGroup className="tillList">
                    { showCurrencies && tillBtnClick && (tillArray[active.id]!==undefined) ?
                    (<TillArray update={updateEl} active={active}/>)
                    : ''}
                </ListGroup>
                : ''
                }
                <DisplayObject on={on} element={element} click={() => {updateElement()}} active={active} />
            </div>
            <div className="mainNavBtns">
                {on ? <Buttons on={on} key={generateKey()} click={() => {updateElement()}}/> : ''}
            </div>
        </div>
        </>
    );
}

const DisplayObject = (props) => {
    function checkAllow() {
        if (allowImgClick) {
            player.SetVar('CHAT_imageIsClicked', true);
            props.click();
        }
    }
    const { on, element, active } = props;
    let obj = [];
    if ((on && element===null)) {
        obj.push(<LazyLoadImage placeholderSrc={active.package} onClick={ () => {checkAllow()} } style={{cursor: (allowImgClick ? 'pointer' : '')}} effect="blur" className="webObjImage" src={active.package} alt=""/>);
    } else if (on) {
        obj.push(<ShowObject element={element}/>);
    } else {
        obj.push(<ShowObject element={element}/>);
    }
    return obj;
}
const ShowObject = (props) => {
    return (
        <StyleRoot>
            <div ><div style={{top:'20vh'}} className="element">{props.element}</div></div>
        </StyleRoot>
    );
}

const TillArray = (props) => {
    const { active, update } = props;
    let tillArr = [];
    let images = tillArray[active.id];
    for (let i=0; i<images.length; i++) {
        let el = <LazyLoadImage placeholderSrc={`currency/${images[i].image}`} effect="blur" alt="" style={{width:'80%'}} src={`currency/${images[i].image}`} />
        tillArr.push(<ListGroup.Item className="tillListItem"><LazyLoadImage placeholderSrc={`currency/${images[i].image}`}effect="blur" onClick={()=>{update(el)}} style={{width:'65px', cursor: 'pointer'}} src={`currency/${images[i].image}`} alt="" /></ListGroup.Item>)
    }
    return tillArr;
}

const Buttons = (props) => {
    const btn = [];
    btn.push(<style type="text/css">
        {`
        .btn-till {
            margin: 2%;
            width: 10vw;
            cursor: pointer;
            font-size: 1.2rem;
            line-height: 1.5;
            border-radius: .3rem;
            padding: 10px 40px!important;
            min-width: 200px;
            margin-bottom: 40px;
            background-color: #a4e59a;
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
        `}</style>);
    for (let i=0; i<buttons.length; i++) {
        btn.push(<Button onClick={ () => {props.click()} } key={i} size="lg" variant="till">{buttons[i].title}</Button>);
    }
    return btn;
}