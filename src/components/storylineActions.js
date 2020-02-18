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