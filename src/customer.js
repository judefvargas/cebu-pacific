export const player = window.parent.GetPlayer();

export const CUSTOMERS = JSON.parse(player.GetVar('PLW_customers'));

export const convoR = JSON.parse(player.GetVar('PLW_conversation'));

export const questionList = JSON.parse(player.GetVar('PLW_questionList'));

export const choicesList = JSON.parse(player.GetVar('PLW_choicesList'));

export const answerList = player.GetVar('PLW_answerList');

export const currentCustomer = player.GetVar('PLW_curCustomer');

export const consequences = player.GetVar('PLW_consequences');

export const buttons =  player.GetVar('PLW_buttons');

export const isShowModal = player.GetVar('PLW_showModal');

export const tillArray = player.GetVar('PLW_currencies');