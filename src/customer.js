export const player = window.parent.GetPlayer();

export const CUSTOMERS = JSON.parse(player.GetVar('CHAT_customers'));

export const convoR = JSON.parse(player.GetVar('CHAT_conversation'));

export const questionList = JSON.parse(player.GetVar('CHAT_questionList'));

export const choicesList = JSON.parse(player.GetVar('CHAT_choicesList'));

export const answerList = JSON.parse(player.GetVar('CHAT_answerList'));

export const currentCustomer = player.GetVar('CHAT_curCustomer');

export const consequences = JSON.parse(player.GetVar('CHAT_consequences'));

export const buttons =  JSON.parse(player.GetVar('CHAT_buttons'));

export const isShowModal = player.GetVar('CHAT_showModal');

export const tillArray = JSON.parse(player.GetVar('CHAT_currencies'));

export const showCurrencies = player.GetVar('CHAT_showCurrencies');

export const doneCustomers = JSON.parse(player.GetVar('CHAT_customers_done'));

export const logo = player.GetVar('CHAT_logo');

export const initChatCount = player.GetVar('CHAT_initialMsgCount');

export const allowClick = player.GetVar('CHAT_allowClick');

export const scoring = JSON.parse(player.GetVar('CHAT_scoring'));

export const buttonTitles = JSON.parse(player.GetVar('CHAT_buttonTitles'));

export const pastChoices = JSON.parse(player.GetVar('CHAT_pastChoices'));

export const allowImgClick = player.GetVar('CHAT_allowTillmageClick');
