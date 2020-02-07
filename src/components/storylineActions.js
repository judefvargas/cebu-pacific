import { player, scoring } from '../customer';

export function updateTotal(isCorrect) {
    let correctPoints = scoring.correct;
    let incorrectPoints = scoring.incorrect;
    let score;

    let currentTotal = player.GetVar('CARGO_totalScore');
    if (isCorrect) {
        score = parseInt(correctPoints);
    } else {
        score = parseInt(incorrectPoints);
    }
    let newTotal = parseInt(currentTotal) + score;
    player.SetVar('CARGO_totalScore', newTotal);
}

export function updateDone(customerId) {
    
}