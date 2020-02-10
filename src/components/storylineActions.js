import { scoring, pastChoices } from '../customer';

export function updateTotal(isCorrect) {
    let correctPoints = scoring.correct;
    let incorrectPoints = scoring.incorrect;
    let score;

    // let currentTotal = player.GetVar('CARGO_totalScore');
    if (isCorrect) {
        score = correctPoints;
    } else {
        score = incorrectPoints;
    }
    let newTotal = score;
    console.log(newTotal);
    // let newTotal = currentTotal + score;
    // player.SetVar('CARGO_totalScore', newTotal);
}

export function saveAnswer(cId, qId, choiceId) {
    // let answers = JSON.parse(player.GetVar('CARGO_pastChoices'));
    let answers = {};
    let prevAns = '';
    let ans = pastChoices[cId];
    if (ans !== undefined) {
        prevAns = ans;
    }
    let actualAns = Object.assign({qId: choiceId}, prevAns)
    answers[cId] = actualAns;

}