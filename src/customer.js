export const player = window.parent.GetPlayer();

export const CUSTOMERS = JSON.parse(player.GetVar('PLW_customers'));

export const convoR = JSON.parse(player.GetVar('PLW_conversation'));

export const questionList = JSON.parse(player.GetVar('PLW_questionList'));

export const choicesList = JSON.parse(player.GetVar('PLW_choicesList'));

export const answerList = player.GetVar('PLW_answerList');

export const currentCustomer = player.GetVar('PLW_curCustomer');

export const consequences = JSON.parse(player.GetVar('PLW_consequences'));

export const buttons =  JSON.parse(player.GetVar('PLW_buttons'));

export const isShowModal = player.GetVar('PLW_showModal');

export const tillArray = JSON.parse(player.GetVar('PLW_currencies'));

export const showCurrencies = player.GetVar('PLW_showCurrencies');

export const doneCustomers = JSON.parse(player.GetVar('PLW_customers_done'));

export const logo = player.GetVar('PLW_logo');