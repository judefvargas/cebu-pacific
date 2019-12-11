export const CUSTOMERS = [
  {
      id: 1, 
      name: "Jude Vargas",
      age: 25,
      image: '12.png',
      package: 'bag.png',
      text: "I'd like to transfer my dog"
    },
    {
      id: 2, 
      name: "A Vargas",
      age: 25,
      image: '4.png',
      package: 'money.png',
      text: "I'd like to transfer my dog"
    }
];

export const CONVERSATION = [
{
  john: 'Hello po, I’m John. Happy to serve you. Ano pong maipaglilingkod namin sa inyo?',
  customer: 'English please.',
},
{
  john: 'Oh, how may I help you sir?',
  customer: 'I want to change my Dollars into Pesos',
},
{
  john: 'No problem, sir. Please fill out this form.',
  customer: 'Excuse me, is the purpose of purchase really necessary? What I do with my money is none of your business. This is an invasion of privacy!',
},
// {
//   customer: 'Duis aute irure dolor in reprehenderit in ',
//   john: 'dolor sit amet, consectetur adipiscing elit'
// },
// {
//   customer: 'Ut enim ad minim veniam, quis nostrud',
//   john: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
// },

];

export const convoR = {
1: 
    [
        {
          "john": 'Hello, ako po si John. Happy to serve you. Ano po ang maipaglilingkod ko sa inyo?',
        },
        {
          "customer": 'English please.'
        },
        {
          "john": 'Oh, how may I help you sir?'
        },
        {
          "customer": 'I want to change my Dollars into Pesos'
        },
        {
          "john": 'No problem, sir. Please fill out this form.'
        },
        {
          "customer": "… … …"
        },
        {
          "customer": 'Excuse me, is the purpose of purchase really necessary? What I do with my money is none of your business. This is an invasion of privacy!'
        },
        "q1",
        {
          "branch_manager": "John, oras na para mag-TILL."
        },
        "q2",
        {
          "customer": "What do you mean you can’t accept all the bills? What terms and conditions are you talking about? These bills came out of the ATM at the LAX airport. "
        },
        "q3"
    ],
2: 
    [
        {
          "customer": 'Hi, bumalik lang ako, ipapapalit ko na sana itong Yen ko, hindi ba sabi mo 50 cents sa isa?',
        },
        {
          "john": 'Ay, Ma’am Jenny Rose, kaninang umaga po kasi iyong rate na iyon. Nag-iba na po ngayon.',
        },
        {
          "customer": 'Ha? Bakit nagbago? Bakit binabaan nyo yung rates ninyo, binalikan ko pa naman kayo..'
        },
        "q4",
        {
          "customer": "Sige na nga tutal binalikan ko pa kayo para dito, ito na lang, pakipalitan na lang itong JP¥27,000 ko."
        },
        {
          "branch_manager": "John, oras na para mag-TILL."
        },
        "q5",
        {
          "customer": "Galing pa ng Japan iyan, pinadala sa akin. Paano mo sasabihing may fake?"
        },
        {
          "john": 'Pasensya na Ma’am Jenny Rose.',
        },
        {
          "customer": "Baka pinalitan mo ang pera ko! Noong kinuha mo, hindi ko nakita ang kamay mo, malamang pinagpalit mo sa fake! Napanuod ko iyan sa TV!"
        },
        "q6",

    ]
};
export const questionList = {
"q1": "Ano ang isasagot sa customer?",
"q2": "Magkano ang ipa-process mong pera?",
"q3": "Ano ang sasabihin mo sa customer na sagot base sa Terms and Conditions?",
"q4": "Paano sasagutin ang customer?",
"q5": "Magkano ang ipa-process mong pera?",
"q6": "Paano kakausapin ang customer na pinagbibintangan ka na nandadaya?",
};

export const choicesList = {
"q1": [
  "Sir James, all of the money changers follow the same process. Please don’t get upset. This is standard procedure.",
  "Sir James, this is in compliance with our Know Your Customer Policy as Mandated by the Bangko Sentral ng Pilipinas (BSP).",
  "Sir James, this is in compliance with the laws of the Philippines. This is an order from the president. Even if we want to, we can’t change the law."
],
"q2": [
  "Sir, ok I will process the 500 dollars.",
  "Sir, I can only process 400 dollars.",
  "Sir, I can only process 300 dollars."
],
"q3": [
  "Sir, our terms and conditions say that our we should not accept money that has ink stains and writing.",
  "Sir, our terms and conditions say that we have the right to examine bank notes and decide whether the money is acceptable or not base on the guidelines provided to us. Your bill has writing and ink stains. My apologies sir, but we really can’t accept those bills with stains and writing.",
  "Sir, our terms and conditions say that the Central Bank of the Philippines won’t accept money that has ink stains and writing."
],
"q4": [
  "Ma’am Jenny Rose, kapag tanghali po, nagpapalit po talaga ng exchange rates kasi po sumasabay sa pagsara at pagbukas ng Forex",
  "Ma’am Jenny Rose, depende po talaga sa market ang rates. Kung nagbago ang market price, magbabago rin po kami ng rates kahit ilang beses pa po sa isang araw.",
  "Ma’am Jenny Rose, depende po sa head office ang rates. Pinapadalhan lang po kami ng memo tapos sinusunod lang po namin. "
],
"q5": [
  "Ma’am, ¥26,000 lang po ang mapa-process ko. May mali po kasi sa watermark ng isang bill kaya hindi po namin tatanggapin.",
  "Ma’am, ¥22,000 lang po ang mapa-process ko. May mali po kasi sa watermark ng isang bill kaya hindi po namin tatanggapin.",
  "Ma’am, ¥17,000 lang po ang mapa-process ko. May mali po kasi sa watermark ng isang bill kaya hindi po namin tatanggapin."
],
"q6": [
  "Ay, Ma’am Jenny Rose naman. Baka sa iba ganun pero hindi sa amin. Kahit i-check niyo pa ang internet at mga balita, wala pong ganyang issue ang Palawan Pawnshop.",
  "Ay, Ma’am Jenny Rose naman. Sinulat niyo po kanina iyong mga serial numbers. I-check po natin para makita niyo po na wala tayong pinalitan.",
  "Ay, Ma’am Jenny Rose  naman. May CCTV footage tayo. Kung gusto niyo, i-pull up po natin yung recording para makita niyo iyong galaw ng kamay ko."
]
};

export const consequences = {
"q1": {
  "choice 1": [
    { "customer": "That sounds terrible. You should be thankful I’m still giving you my business even though you’re trying to spy on me. " },
  ],
  "choice 2": [
    { "customer": "Of course I won’t be using the money for illegal activities. I won’t jeopardize my life trying dangerous things in a foreign land!" },
  ],
  "choice 3": [
    { "customer": "Are you kidding me? Are you telling me that your president wants to know how people are using their money? That sounds like a lie." },
  ],
},
"q2": {
  "choice 1": [
    { "branch_manager": "John, sigurado ka ba na ipa-process mo lahat? Parang may nakita akong may hindi dapat tanggapin." },
    { "john": "Ay, ganun po ba? Sige po sasabihin ko sa customer." },
  ],
  "choice 2": [
    { "customer": "Why?" },
    { "john": "Sir, one of the bills has ink stains and writing. We can’t accept that according to our terms and conditions." },
  ],
  "choice 3": [
    { "customer": "Why?" },
    { "john": "Sir, one of the bills has ink stains and writing. Another one has missing safety features. We can’t accept that according to our terms and conditions." },
  ]
},
"q3": {
  "choice 1": [
    { "customer": "This is getting more and more ridiculous. I read your terms and conditions and there is nothing about markings." }
  ],
  "choice 2": [
    { "customer": "This is getting more and more ridiculous. This money is totally acceptable, but I do see the clause about examining bank notes." },
    { "customer": "Fine, just give me however much you want to change." }
  ],
  "choice 3": [
    { "customer": "This is getting more and more ridiculous. This money is totally acceptable. I read your terms and conditions and they say nothing about the Central Bank!" },
    { "customer": "This is ludicrous." }
  ]
},
"q4": {
  "choice 1": [
    { "customer": "Ah oo iyong sa forex nga pala. Oo nga pala tanghali na." }
  ],
  "choice 2": [
    { "customer": "Pwede ko bang makita iyang memo na iyan. Baka kasi niloloko mo lang ako." },
    { "john": "Ma’am confidential po iyon pero yung rate po natin na ibinanggit ko ay program based ito galing sa aming office at wala kaming kakayahan mag manipula." }
  ],
  "choice 3": [
    { "customer": "Ano ba iyan! Ibig sabihin sunod lang kayo ng sunod ng walang dahilan? Walang explanation? Tama ba iyon?" }
  ]
},
"q5": {
  "choice 1": [
    { "customer": "Ano? Anong mali? Fake ang pera ko?" }
  ],
  "choice 2": [
    { "customer": "Ano? Anong mali? Fake ang pera ko?" },
  ],
  "choice 3": [
    { "customer": "Ano? Anong mali? Fake ang pera ko?" }
  ]
},
"q6": {
  "choice 1": [
    { "customer": "Naku, madaling sabihin iyan. Kailangan ko ng ebidensya kung hindi, idedemanda ko kayong lahat." }
  ],
  "choice 2": [
    { "john": "Ma’am, ito po iyong bill na mali ang watermark, magka-match sila nung nakasulat sa form. Hindi po namin pinalitan." },
    { "customer": "Ganun ba? Naku iyong kaibigan ko siguro ang nagpalit niyan. Lagot siya sa akin!" }
  ],
  "choice 3": [
    { "customer": "Naku, eh nakaharap naman sa labas ang CCTV niyo hindi sa loob ng booth, eh ‘di walang kwenta iyan!" }
  ]
}
}

export const answerList = {
"q1": [
  "CHOICE 1",
],
"q2": [
  "CHOICE 2"
],
"q3": [
  "CHOICE 2",
],
};

export const currentCustomer = 1;

export const buttons = [
{id: 1, title: 'PERFORM TILL'}
];

export const isShowModal = false;

export const tillArray = {
"1": [
  {"image": "100dollars.jpg"},
  {"image": "defaced.jpg"},
  {"image": "100dollars.jpg"},
  {"image": "100dollars.jpg"}
],
"2": [
  {"image": "100dollars.jpg"},
  {"image": "defaced.jpg"}
]
};


export const showCurrencies = true; //PLW_showCurrencies

export const doneCustomers = [];

export const logo = 'PPS logo.png';