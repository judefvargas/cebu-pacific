import { player, scoring } from '../customer';

export function updateTotal(isCorrect) {
    let correctPoints = scoring.correct;
    let incorrectPoints = scoring.incorrect;
    let score;

    let currentTotal = player.GetVar('CARGO_totalScore');
    if (isCorrect) {
        score = correctPoints;
    } else {
        score = incorrectPoints;
    }
    let newTotal = currentTotal + score;
    player.SetVar('CARGO_totalScore', newTotal);
}