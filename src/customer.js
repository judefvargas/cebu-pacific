// export const player = window.parent.GetPlayer();

export const CUSTOMERS = [    {       "id":1,      "name":"Jude Vargas",      "age":25,      "image":"4.png",      "package":"bag.png",      "text":"I'd like to transfer my dog"   }];

export const convoR = ({    "1":[       {          "customer":"Ipapapalit ko sana to, kaso hindi ko na alam kung anu-anong mga pera ‘to kasi natira lang ‘to sa biyahe namin."      },    "q1", "q2" ]});

export const questionList = ({    "q1":"Magkano ang papalitan mo?", "q2":"Mapapalitan mo ba ang lahat ng pera?" });

export const choicesList = ({    "q1":[       "400 Chinese Yuan, at 300 Taiwan Dollars po, Ma’am Shaira.",      "400 Chinese Yuan, 300 Taiwan Dollars, 20 Bangladeshi Taka, at 500 Peruvian Sol po.",      "300 Chinese Yuan at 400 Taiwan Dollars po, Ma’am Shaira. Hindi po namin tinatanggap ang pera ng Bangladesh at Peru."   ], "q2":["Ma’am Shaira, hindi ko po mapaprocess ‘yung isang 100 Taiwan Dollar dahil may mali po. Pero pwede naman po ‘yung iba.", "Ma’am Shaira, hindi ko po mapaprocess ‘yung isang 100 Chinese Yuan dahil 2000 series pa po. Pero pwede naman po ‘yung iba. ", "Ma’am Shaira, ok naman po lahat ng bills. Palitan ko na po."]   });

export const answerList = {  "q1": [    "CHOICE 1"  ]};

export const currentCustomer = 1;

export const consequences = ({    "q1":{       "choice 1":[          {             "customer":"Bakit hindi lahat papalitan?"         }, {"john": "Hindi po kami nagpapalit ng pera ng Bangladesh at Peru, ma’am."}      ],      "choice 2":[          {             "branch_manager":"Naku, John, i-double check mo yan."         }, { "john":"Po?" },{"branch_manager":"Hindi tayo nagpapalit ng Sol at Taka."},{"john":"Ay, opo pala. Thank you po, Ate Marie."}      ],      "choice 3":[          {             "branch_manager":"Naku, John, i-double check mo yan."         }, {"john": "Po?"}, {"branch_manager": "Napagbaliktad mo yata ang Chinese Yuan at Taiwan Dollar. "},{"john":"Ay, opo pala. Thank you, Ate Marie. Salamat po."}      ]    }, "q2":  {"choice 1": [{"customer": "Ah ganun ba? Bakit ganun? Hindi naman kami kumain at gumastos kung hindi sa mga mall lang? Tsk."}], "choice 2": [{"customer": "Ah ganun ba? Naku iyong asawa ko kasi, gustong-gusto kumain sa kung saan-saan ng street food! Hayan tuloy, nasuklian kami ng 2000 series. Sige salamat!"}], "choice 3":[{"customer": "Salamat!"}]  } });

export const buttons =  ([    {       "id":1,      "title":"PERFORM TILL"   }]);

export const isShowModal = false;

export const tillArray = ({    "1":[       {          "image":"100dollars.jpg"      },      {          "image":"defaced.jpg"      },      {          "image":"100dollars.jpg"      },      {          "image":"100dollars.jpg"      },      {          "image":"100dollars.jpg"      }   ],   "2":[       {          "image":"10000 japanese yen.png"      },      {          "image":"5000 japanese yen.png"      },      {          "image":"1000 japanese yen.png"      },      {          "image":"10000 japanese yen.png"      },      {          "image":"5000 japanese yen.png"      }   ]});

export const showCurrencies = false;

export const doneCustomers = ([]);

export const logo = "PPS logo.png";