export const player = window.parent.GetPlayer();

export const CUSTOMERS = JSON.parse(player.GetVar('CARGO_customers'));

export const convoR = JSON.parse(player.GetVar('CARGO_conversation'));

export const questionList = JSON.parse(player.GetVar('CARGO_questionList'));

export const choicesList = JSON.parse(player.GetVar('CARGO_choicesList'));

export const answerList = player.GetVar('CARGO_answerList');

export const currentCustomer = player.GetVar('CARGO_curCustomer');

export const consequences = JSON.parse(player.GetVar('CARGO_consequences'));

export const buttons =  JSON.parse(player.GetVar('CARGO_buttons'));

export const isShowModal = player.GetVar('CARGO_showModal');

export const tillArray = JSON.parse(player.GetVar('CARGO_currencies'));

export const showCurrencies = player.GetVar('CARGO_showCurrencies');

export const doneCustomers = JSON.parse(player.GetVar('CARGO_customers_done'));

export const logo = player.GetVar('CARGO_logo');