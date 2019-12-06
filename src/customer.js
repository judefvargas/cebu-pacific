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
        image: '1.png',
        package: 'money.png',
        text: "I'd like to transfer my dog"
      },
      {
        id: 3, 
        name: "B Vargas",
        age: 25,
        image: '2.png',
        package: 'bag.png',
        text: "I'd like to transfer my dog"
      },
      {
        id: 4, 
        name: "C Vargas",
        age: 25,
        image: '3.png',
        package: 'bag.png',
        text: "I'd like to transfer my dog"
      },
      // {
      //   id: 1, 
      //   name: "D Vargas",
      //   age: 25,
      //   image: '4.png',
      //   text: "I'd like to transfer my dog"
      // },
      // {
      //   id: 1, 
      //   name: "E Vargas",
      //   age: 25,
      //   image: '5.png',
      //   text: "I'd like to transfer my dog"
      // },
      // {
      //   id: 1, 
      //   name: "F Vargas",
      //   age: 25,
      //   image: '12.png',
      //   text: "I'd like to transfer my dog"
      // },
      // {
      //   id: 1, 
      //   name: "G Vargas",
      //   age: 25,
      //   image: '7.png',
      //   text: "I'd like to transfer my dog"
      // },
      // {
      //   id: 1, 
      //   name: "H Vargas",
      //   age: 25,
      //   image: '8.png',
      //   text: "I'd like to transfer my dog"
      // },
      // {
      //   id: 1, 
      //   name: "I Vargas",
      //   age: 25,
      //   image: '9.png',
      //   text: "I'd like to transfer my dog"
      // },
      // {
      //   id: 1, 
      //   name: "J Vargas",
      //   age: 25,
      //   image: '10.png',
      //   text: "I'd like to transfer my dog"
      // },
      // {
      //   id: 1, 
      //   name: "K Vargas",
      //   age: 25,
      //   image: 'customer1.png',
      //   text: "I'd like to transfer my dog"
      // },
      // {
      //   id: 1, 
      //   name: "L Vargas",
      //   age: 25,
      //   image: 'customer1.png',
      //   text: "I'd like to transfer my dog"
      // },
      // {
      //   id: 1, 
      //   name: "M Vargas",
      //   age: 25,
      //   image: 'customer1.png',
      //   text: "I'd like to transfer my dog"
      // },
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
          }
      ],
  2: 
      [
          {
            "john": 'Hello po, I’m John. Happy to serve you. Ano pong maipaglilingkod namin sa inyo?',
          },
          {
            "john": 'Sample 2slakdalskjd',
          },
          {
            "customer": 'English please.'
          },
          {
            "john": 'Oh, how may I help you sir?.'
          },
          {
            "customer": 'I want to change my Dollars into Pesos.'
          },
          "q2"
      ]
};
export const questionList = {
  "q1": "Ano ang isasagot sa customer?",
  "q2": "QUESTION 2",
  "q3": "QUESTION 3",
  "q4": "QUESTION 4",
  "q5": "QUESTION 5",
  "q6": "QUESTION 6",
  "q7": "QUESTION 7",
  "q8": "QUESTION 8",
};

export const choicesList = {
  "q1": [
    "Ganito talaga ang process.",
    "Bahagi ito ng KYC.",
    "Utos ito ng pangulo ng Pilipinas."
  ],
  "q2": [
    "CHOICE 1",
    "CHOICE 2"
  ],
  "q3": [
    "CHOICE 1",
    "CHOICE 2",
    "CHOICE 3",
    "CHOICE 4",
  ],
};

export const consequences = {
  "q1": {
    "choice 1": [
      { "customer": "That sounds terrible. You should be thankful I’m still giving you my business even though you’re trying to spy on me. " },
      { "john": "consequence 2" },
      { "customer": "consequence 3" },
    ],
    "choice 2": [
      { "customer": "Of course I won’t be using the money for illegal activities. I won’t jeopardize my life trying dangerous things in a foreign land!" },
      { "john": "choice 2 consequence 2" }
    ],
    
  },
  "q2": {
    "choice 1": [
      { "john": "STRING STRING" },
      { "john": "ako si jude" },
      { "customer": "hello world" },
      "q3"
    ],
    "choice 2": [
      { "john": "asdasdasdas d as dasdaskdljas askldas ldjas lkjdl" },
      { "john": "asdsa" }
    ]
  },
  "q3": {
    "choice 1": [
      { "john": "STRING STRING" },
      { "john": "ako si jude" },
      { "customer": "hello world" },
      "q3"
    ],
    "choice 2": [
      { "john": "asdasdasdas d as dasdaskdljas askldas ldjas lkjdl" },
      { "john": "asdsa" }
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