import React, { useEffect, useRef, useReducer } from 'react'
import './mainnav.css';
import { player, CUSTOMERS, convoR, initChatCount, shouldStart, } from '../../customer';
import Button from 'react-bootstrap/Button';
import Conversation from './Conversation';
import { styles } from '../animationStyles';
import {StyleRoot} from 'radium';
import { saveChatIndex, saveConvoPosition, searchNext, hasConvoData, returnDataAtPosition, } from '../storylineActions';

export default function Interaction(props) {
    const messageEndRef = useRef(null);
    let storedConversation = hasConvoData(props.active.id) ? returnDataAtPosition(props.active.id) : null;
    // let storedConversation = JSON.parse(localStorage.getItem('CHAT_currentConvoPos'));
    let indexTracking = JSON.parse(player.GetVar('CHAT_indexTracking'));
    // let indexTracking = JSON.parse(localStorage.getItem('CHAT_indexTracking'));
    let actualIndex = searchIndex(indexTracking, props.active.id);
    let actualConversation = searchIndex(storedConversation, props.active.id);
    // let notDone = searchUnfinished(CUSTOMERS, props.done, props.active.id);

    const current = React.useMemo(() => {
      let curArr = [];
      if (actualConversation!==null && storedConversation!==null && storedConversation.length!==0) {
        curArr.push(actualConversation);
      } else {
        for (let [key, value] of Object.entries(convoR)) {
          if (parseInt(key) === props.active.id) curArr.push(value);
        }
      }
      return curArr;
    }, [actualConversation, props.active.id, storedConversation]);

    let actualArray = [...current];

    let currentConvoString = (actualIndex) ? actualArray[0][actualIndex] : null; //current string being shown to user
    /* Set initial values */
    const initVal = {
      count: (storedConversation!==null && storedConversation.length!==0) 
        ? actualIndex 
        : initChatCount-1, //chat message count initially shown
      hidden: '', //for hiding next button
      longDiv: '', //if next button is hidden, chat will take up entire space
      disabled: (actualArray.length===0 || typeof(currentConvoString) === 'string') ? true : false, //button disable (for decision points)
      length: actualArray.length!==0 ? actualArray[0].length : 0, //length of conversation
      current: actualArray.length!==0 ? currentConvoString : 0,
      isBtnPulse: false, //button animation 
      // actualCurrent: actualArray.length!==0 ? actualArray[0][1] : 0,
      temp: [], //storage for consequences,
      hasError: actualArray.length!==0 ? false : true, //has error message (no consequence data, etc)
      errorMessage: actualArray.length!==0 ? null : 'No conversation data available', //error message container
      wholeCon: actualArray.length!==0 ? actualArray[0] : [], //whole conversation
      isNew: false,
      btnTitle: 'NEXT'
    };
    // console.log(initVal);
    useEffect(() => {
      dispatch({type: 'RESET'});
    }, [props.active.id]);
    const [state, dispatch] = useReducer(reducer, initVal);

    useEffect(() => {
      if (shouldStart && !hasConvoData(props.active.id)) {
        saveConvoPosition(props.active.id, state.wholeCon);
        saveChatIndex(props.active.id, state.count-1);
      }
    }, [shouldStart])
    /* Insert object to specific index in object */
    const insertToObject = (obj, newObj, index) => {
      let temp = [];
      let final = [];
      for (const [key, value] of Object.entries(obj)) {
        if (parseInt(key)>index) {
          temp.push(value);
          delete obj[key];
        } else {
          final.push(obj[key]);
        }
      }

      for(let i=0; i<newObj.length; i++) {
        final.push(newObj[i]);
      }
      for(let j=0; j<temp.length; j++) {
        final.push(temp[j]);
      }
      return final;
    }
    /* Reducer */
    function reducer(state, action) {
      switch(action.type) {
        case 'BUTTON_CLICKED': {
          return {
            ...state,
            count: state.count+1,
            disabled: typeof(state.wholeCon[state.count+1])!=='object' ? true : false,
            current: state.wholeCon[state.count+1],
            // actualCurrent: state.wholeCon[state.count+1],
            isBtnPulse: false,
            hasError: false
          }
        }
        case 'UPDATE_CHOICE': {
          return {
            ...state,
            count: state.count +1,
            disabled: false,
            // actualCurrent: state.wholeCon[state.count],
            current: state.wholeCon[state.count+1],
            isBtnPulse: state.wholeCon[state.count+1]!=='object'?true:false,
            hasError: false,
            wholeCon: state.temp[0]
          }
        }
        case 'UPDATE_LENGTH': {
          return {
            ...state,
            length: action.payload
          }
        }
        case 'UPDATE_TEMP': {
          return {
            ...state, 
            temp: action.payload
          }
        }
        case 'UPDATE_NEW': {
          return {
            ...state, 
            isNew: action.payload
          }
        }
        case 'UPDATE_BTN_TITLE': {
          return {
            ...state, 
            btnTitle: action.payload
          }
        }
        case 'DISABLE_BUTTON': {
          return {
            ...state,
            disabled: true
          }
        }
        case 'RESET': {
          // console.log(initVal);
          return { ...initVal }
        }
        default: return state;
      }
    }

    function startConversation() {
      props.turnOn();
      
      let newObj;
      for (let [key, value] of Object.entries(convoR)) {
        if (parseInt(props.active.id) === parseInt(key)) {
          newObj = new Map([
            [key, value]
          ]);
        }
        
      }
      const obj = Object.fromEntries(newObj);
      let indexTracking = {};
      indexTracking[props.active.id] = state.count;
      player.SetVar('CHAT_currentConvoPos', JSON.stringify([obj]));
      player.SetVar('CHAT_indexTracking', JSON.stringify([indexTracking]));
      // localStorage.setItem('CHAT_currentConvoPos', JSON.stringify([obj]));
      // localStorage.setItem('CHAT_indexTracking', JSON.stringify([indexTracking]));
    }

    /* Update conversation data */
    function updateCon(convoData) {
      if (convoData.convo===undefined) {
        state.hasError = true;
        state.errorMessage = convoData.msg;
      } else {
        state.hasError = false;
        let completeConvo = state.wholeCon;

        let c = insertToObject(completeConvo, convoData.convo, state.count);
        saveConvoPosition(props.active.id, c);
        dispatch({type: 'UPDATE_TEMP', payload: [c]});
      }
    }

    /* Actions when next button is clicked */
    function onClick() {
      let tempLength = state.length;
      if (state.temp.length!==0) { // for consequences
        // saveChatIndex(props.active.id, state.count);
        state.wholeCon = state.temp[0];
        tempLength = state.temp[0].length;
        saveConvoPosition(props.active.id, state.wholeCon);
        dispatch({type: 'UPDATE_LENGTH', payload: state.temp[0].length});
        state.temp = [];
      }
      if (state.count+1===tempLength) {
        let aArr = [...props.done, props.active.id];
        /* if all done, show results */
        if (CUSTOMERS.length===aArr.length) {
          player.SetVar('CHAT_showResults', true);
          // player.SetVar('CHAT_showResults', true);
        /* Go to next customer */
        } else {
          dispatch({type: 'UPDATE_NEW', payload: true});
          dispatch({type: 'DISABLE_BUTTON'});
          props.updateEl(null);
          props.updateTillClick(false);
          let next = searchNext(props.active.id, props.done);
          setTimeout(() => {
            props.next()
            dispatch({type: 'RESET'});
          }, 500);
          if (props.active.id < next && !hasConvoData(next)) {
            saveChatIndex(next, null, true);
            saveConvoPosition(next, convoR[next])
          }

        }
      /* Show next item in conversation */
      } else {
        dispatch({type: 'BUTTON_CLICKED'})
        saveChatIndex(props.active.id, state.count);
        // let curIndex = localStorage.getItem('CHAT_indexTracking');
      }
    }
    if ((state.wholeCon.length-1 === state.count) && typeof(state.wholeCon[state.count])!=='string' && state.btnTitle!=='NEXT CUSTOMER' && state.btnTitle!=='SHOW RESULTS') {
      let aArr = [...props.done, props.active.id];
      if (CUSTOMERS.length===aArr.length) {
        dispatch({type: 'UPDATE_BTN_TITLE', payload: 'SHOW RESULTS'});
      } else {
        dispatch({type: 'UPDATE_BTN_TITLE', payload: 'NEXT CUSTOMER'});
      }
    }
    let aArr = [...props.done, props.active.id];
    if ((state.wholeCon[state.count] === 'EXIT-NEXT' || (state.wholeCon[state.count+1] && state.wholeCon[state.count+1] === 'EXIT-NEXT')) && aArr.length >= CUSTOMERS.length && state.btnTitle!=='SHOW DETAILS') {
      dispatch({type: 'UPDATE_BTN_TITLE', payload: 'SHOW DETAILS'});
    }
    /* For scrolling to bottom of div when next button is clicked (i.e. always show recent messages) */ 
    const scrollToBottom = () => {
      if (state.count>1 && messageEndRef.current!==null) {
        messageEndRef.current.scrollIntoView({ behavior: 'smooth', inline: 'end' });
      }
    }
    
    useEffect(scrollToBottom);
    return (
      <>
      <style type="text/css">
        {`
        .btn-next {
          background-color: #ed1f24;;
          color: white;
          bottom: 0;
          margin-top: 20px;
          height: 45px;
          width: 72%;
        }
        .btn-next:hover {
          text-decoration: none;
          background-color: #218838;
          color:white;
        }
        .btn-start {
          background-color: #28a745;
          color: white;
          bottom: 0;
          height: 5vh;
          width: 72%;
        }
        .btn-start:hover {
          text-decoration: none;
          background-color: #218838;
          border-color: #1e7e34;
          color:white;
        }
        .btn-next:disabled {
          background-color: #968a8a
        }
        `}
      </style>
      { (!props.on) 
      ? <div className="col col-md-7 convo">
          <div className="startContainer" >
            <Button variant="start" onClick={() => {startConversation()}}>START CONVERSATION</Button>
          </div>
        </div>
      : (<div className="col col-md-7 convo" >
        <StyleRoot><div className={`conversation ${state.longDiv}`} id="style-3" style={ (state.isNew) ? (styles.fadeOut) : {} }>
          <div className="divOverflow" >
            { state.wholeCon.length!==0 ? 
            (<Conversation 
              active={props.active} 
              wholeCon={state.wholeCon} 
              // actual={state.actualCurrent} 
              id="container3" 
              update={ () => { dispatch({type: 'UPDATE_CHOICE' }) } } 
              current={state.current}  
              count={state.count} 
              key="1" 
              updateConvo={(val)=>{ updateCon(val) }} 
              updateTill={props.updateTill} 
              tillBtnClick={props.tillBtnClick} 
              reset={() => { dispatch({type: 'RESET'}) }}
              updateTitle={(payload) =>{dispatch({type: 'UPDATE_BTN_TITLE', payload: payload})}}
              next={props.next} />) : '' }
          </div>
          { state.hasError ? <div>{state.errorMessage}</div> : '' }
          <div id="reference1" ref={messageEndRef} ></div>
        </div></StyleRoot>
      <Button className={state.btnTitle!=='NEXT'?'nextBtn':''} 
        disabled={state.disabled} 
        onClick={ onClick.bind(this) } 
        variant="next">{state.btnTitle}
      </Button>
      </div>
      ) }
      </>
  );
}

const searchIndex = (indArr, activeId) => {
  let searchVal;
  if(indArr !== null) {
    let tempArr = indArr.filter((object) => parseInt(Object.keys(object)[0]) === activeId)
    searchVal = tempArr.length!==0 ? tempArr[0][activeId] : null; 
  } else {
    searchVal = null;
  }
  return searchVal;
}
