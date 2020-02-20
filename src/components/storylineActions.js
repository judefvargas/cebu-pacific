import { player, scoring, pastChoices, } from '../customer';

export function updateTotal(isCorrect) {
    let correctPoints = scoring.correct;
    let incorrectPoints = scoring.incorrect;
    let score;

    let currentTotal = player.GetVar('CHAT_totalScore');
    if (isCorrect) {
        score = parseInt(correctPoints);
    } else {
        score = parseInt(incorrectPoints);
    }

    let newTotal = parseInt(currentTotal) + score;
    player.SetVar('CHAT_totalScore', newTotal);
}

export function saveAnswer(cId, qId, choiceId) {
    // let answers = JSON.parse(player.GetVar('CHAT_pastChoices'));
    let answers = {};
    let prevAns = '';
    let ans = pastChoices[cId];
    if (ans !== undefined) {
        console.log('i am here');
        prevAns = ans;
    }
    let actualAns = Object.assign({qId: choiceId}, prevAns)
    answers[cId] = actualAns;
    player.SetVar('CHAT_pastChoices', answers);

}

export function saveChatIndex(activeId, count, isNew) {
  let trackArr = [];
  let trackingIndex = {};
  let index = isNew ? count : (count + 1);
  let currentTracking = localStorage.getItem('CHAT_indexTracking');
  if (currentTracking !== null) {
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
  let previous = localStorage.getItem('CHAT_currentConvoPos');
  let allConvo = [];
  let updConvo = {};

  if (previous !== null) {
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