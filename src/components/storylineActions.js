import { CUSTOMERS, scoring, } from '../customer';

export function updateTotal(isCorrect) {
    let correctPoints = scoring.correct;
    let incorrectPoints = scoring.incorrect;
    let score;

    // let currentTotal = player.GetVar('CHAT_totalScore');
    if (isCorrect) {
        score = correctPoints;
    } else {
        score = incorrectPoints;
    }
    let newTotal = score;
    // let newTotal = currentTotal + score;
    // player.SetVar('CHAT_totalScore', newTotal);
}

export function saveAnswer(cId, qId, choiceId) {
    let answers = localStorage.getItem('CHAT_pastChoices') ?? [];
    let ansObj = {};
    let allAns = [];
    // let answers = JSON.parse(player.GetVar('CHAT_pastChoices'));
    // let answers = {};
    let prevAns = {};
    let tempObj = {};
    if (answers.length!==0) {
      let curAns = JSON.parse(answers);
      let customerPrevAns = findCustomerAnswer(curAns, cId); // returns array [index, value]
      let newAns;
      if (customerPrevAns!==null) {
        let prevAnsIndex = customerPrevAns[0];
        // parse through everything in array
        for (let i in curAns) {
          // if it contains the previous answers for the customer, assign prevAns
          if (prevAnsIndex === parseInt(i)) {
            newAns = Object.assign({}, curAns[customerPrevAns[0]]);
            prevAns = newAns[cId];
          // else push object to allAns
          } else {
            allAns.push(curAns[i])
          }
        }
      } else {
        // push all previous to allAns array
        for(let i in curAns) {
          allAns.push(curAns[i]);
        }
      }
    }
    tempObj[qId] = choiceId; //assign question to answer
    let actualAns = Object.assign(tempObj, prevAns); //put in object to be assigned to customer id 
    ansObj[cId] = actualAns; //assign answers to question
    allAns.push(ansObj);
    localStorage.setItem('CHAT_pastChoices', JSON.stringify(allAns));
    // player.SetVar('CHAT_pastChoices', JSON.stringify(answers));
}

export function saveChatIndex(activeId, count, isNew) {
  let trackArr = [];
  let trackingIndex = {};
  let index = isNew ? count : (count + 1);
  let currentTracking = localStorage.getItem('CHAT_indexTracking') ?? [];
  if (currentTracking.length!==0) {
    currentTracking = JSON.parse(currentTracking);
    /* if null, check if existing then assign existing index else assign 0 as index */
    if (searchIfExisting(activeId, currentTracking)) {
      for (let i in currentTracking) {
        if (parseInt(Object.keys(currentTracking[i])[0]) === activeId) {
          trackingIndex[activeId] = (index!==null ? index : Object.values(currentTracking[i])[0]);
          trackArr.push(trackingIndex);
        } else {
          trackArr.push(currentTracking[i]);
        }
      }
    } else {
      trackArr = currentTracking;
      trackingIndex[activeId] = (index!==null ? index : 0);
      trackArr.push(trackingIndex);
    }
  } else {
    trackingIndex[activeId] = index;
    trackArr.push(trackingIndex);
  }
  localStorage.setItem('CHAT_indexTracking', JSON.stringify(trackArr));
}

export function saveConvoPosition(activeId, convoArray) {
  let previous = localStorage.getItem('CHAT_currentConvoPos') ?? [];
  let allConvo = [];
  let updConvo = {};

  if (previous.length!==0) {
    previous = JSON.parse(previous);
    if (searchIfExisting(activeId, previous)) {
      for (let i in previous) {
        if (parseInt(Object.keys(previous[i])[0]) === activeId) {
          updConvo[activeId] = convoArray;
          allConvo.push(updConvo);
        } else {
          allConvo.push(previous[i]);
        }
      }
    } else {
      allConvo = [...previous];
      updConvo[activeId] = convoArray;
      allConvo.push(updConvo);
    }
  } else {
    updConvo[activeId] = convoArray;
    allConvo.push(updConvo);
  }
  
  localStorage.setItem('CHAT_currentConvoPos', JSON.stringify(allConvo));
}

export function getInitial() {
  
}

const searchIfExisting = (id, array) => {
  for (let key in array) {
    if (parseInt(Object.keys(array[key])[0]) === id) {
      return true;
    }
  }
  return false;
}
export const searchUnfinished = (doneCustomers, activeId) => {
  let unfinished = CUSTOMERS.filter((object) => {
    if (doneCustomers.indexOf(parseInt(object.id)) === -1 
      && parseInt(object.id)!==activeId) 
      return true;
    else return false;
  });
  let actual;
  if(unfinished.length!==0) {
    actual = unfinished.map(element => {
      return element.id;
    });  
  }
  return actual;
}

const findCustomerAnswer = (ansArray, customerId) => {
  for (let i=0; i<ansArray.length; i++) {
    for (const [key, value] of Object.entries(ansArray[i])) {
      if (parseInt(key)===parseInt(customerId)) {
        return [i, value];
      }
    }
  }
  return null;
}


export const searchNext = (activeId, doneArray) => {
  let next;
  let notDone = searchUnfinished(doneArray, activeId);
  for (let i in CUSTOMERS) {
    let current = CUSTOMERS[i];
    if ((parseInt(current.id) === parseInt(activeId))) {
      next = CUSTOMERS[parseInt(i)+1];
      if (next!==undefined && doneArray.indexOf(next.id)===-1) {
        return next.id;
      } else {
        return notDone[0];
      }
    }
  }
}

export const hasConvoData = (activeId) => {
  let convo = JSON.parse(localStorage.getItem('CHAT_currentConvoPos'));
  for (let i in convo) {
    if ((convo[i][activeId]) !== undefined) {
      return true;
    }
  }
  return false;
}