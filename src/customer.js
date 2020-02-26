export const player = window.parent.GetPlayer();

export const CUSTOMERS = [    {       "id":1,      "name":"Annabelle Reyes",      "age":25,      "image":"4.png",      "package":"bag.png",      "text":"I'd like to transfer my dog", "time": "10:40", "date":"January 12"    }, {       "id":2,      "name":"Robert Downey",      "age":32,      "image":"1.png",      "package":"money.png",      "text":"I'd like to transfer my bag", "time": "1:40", "date":"October 12"   }, {       "id":3,      "name":"Daniela Reyes",      "age":12,      "image":"5.png",      "package":"money.png",      "text":"I'd like to transfer my bag", "time": "1:40", "date":"October 12"   }];

export const convoR = ({    "1":[       {          "customer":"Ipapapalit ko sana to, kaso hindi ko na alam kung anu-anong mga pera ‘to kasi natira lang ‘to sa biyahe namin."      },    "q1", "q2" ], "2":[       {          "customer":"Magandang Umaga po."      },    {          "customer":"Magpapapalit po sana ako ng pera."      }, {          "john":"Ah sige po, magkano po ang ipapapalit ninyo"      }, "q2" ], "3":[       {          "customer":"Sample sample sadsadsadkljasldjljl."      },    "q1", "q2" ]});

export const questionList = JSON.parse(player.GetVar('CHAT_questionList'));

export const choicesList = JSON.parse(player.GetVar('CHAT_choicesList'));

export const answerList = JSON.parse(player.GetVar('CHAT_answerList'));

export const currentCustomer = player.GetVar('CHAT_curCustomer');

export const consequences = JSON.parse(player.GetVar('CHAT_consequences'));

export const buttons =  ([    {       "id":1,      "title":"Mag TILL ng Pera"   }]);

export const isShowModal = player.GetVar('CHAT_showModal');

export const tillArray = JSON.parse(player.GetVar('CHAT_currencies'));

export const showCurrencies = player.GetVar('CHAT_showCurrencies');

export const doneCustomers = JSON.parse(player.GetVar('CHAT_customers_done'));

export const logo = player.GetVar('CHAT_logo');

export const initChatCount = player.GetVar('CHAT_initialMsgCount');

export const allowClick = player.GetVar('CHAT_allowClick');

export const scoring = JSON.parse(player.GetVar('CHAT_scoring'));

export const buttonTitles = {
    "job_aids": "Job Aids", 
    "tutorial": "Tutorial"
}

export const pastChoices = {};

export const allowImgClick = true;

