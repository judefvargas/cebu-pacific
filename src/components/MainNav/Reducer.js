import React, { useReducer } from 'react';
import { convoR, currentCustomer } from '../../customer';

const current = [];
Object.keys(convoR).forEach(function(key) {
    if (parseInt(key) === currentCustomer) current.push(convoR[key]);
});
let wholeCon = current[0];

let length = wholeCon.length-1;
const [state, dispatch] = useReducer(reducer, {
    count: 1,
    currentIndex: 1,
    hidden: '',
    longDiv: '',
    disabled: false,
    length: length
});

function reducer(state, action) {
    switch(action.type) {
        case 'BUTTON_CLICKED': {
            return {
                ...state,
                count: state.count+1,
                currentIndex: (state.currentIndex===1)?0:1,
                hidden: (state.count===state.length-1)?'isHidden':'',
                longDiv: (state.count===state.length-1)?'longDiv':'',
                disabled: typeof(wholeCon[state.count+1])!=='object' ? true : false
            }
        }
        default: return state;
    }
}