export const player = window.parent.GetPlayer();

export const CUSTOMERS = JSON.parse(player.GetVar('PLW_customers'));

export const convoR = JSON.parse(player.GetVar('PLW_conversation'));

export const questionList = JSON.parse(player.GetVar('PLW_questionList'));

export const choicesList = JSON.parse(player.GetVar('PLW_choicesList'));

export const answerList = player.GetVar('PLW_answerList');

export const currentCustomer = player.GetVar('PLW_curCustomer');
