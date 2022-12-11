const QUIZ_DATA = [
  {
    question: "How do you set state in a functional React component?",
    options: [
      {id: 1, answer: "By declaring a state variable and assigning an object.", isCorrect: false},
      {id: 2, answer: "By using the useState() Hook.", isCorrect: true},
      {id: 3, answer: "By using the setState() method on 'this'.", isCorrect: false},
      {id: 4, answer: "Functional React components do not support state.", isCorrect: false}
    ]
  },
  {
    question: "When rendering a list of elements in JSX using the JavaScript map() method, what is required for each element rendered?",
    options: [
      {id: 1, answer: "id", isCorrect: false},
      {id: 2, answer: "index", isCorrect: false},
      {id: 3, answer: "key", isCorrect: true},
      {id: 4, answer: "data", isCorrect: false}
    ]
  },
  {
    question: "What is used to pass data from parent to child component?",
    options: [
      {id: 1, answer: "props", isCorrect: true},
      {id: 2, answer: "state", isCorrect: false},
      {id: 3, answer: "Component", isCorrect: false},
      {id: 4, answer: "render()", isCorrect: false}
    ]
  },
  {
    question: "What keyword is used for assigning classes for styling JSX elements within JSX code?",
    options: [
      {id: 1, answer: "styles", isCorrect: false},
      {id: 2, answer: "class", isCorrect: false},
      {id: 3, answer: "id", isCorrect: false},
      {id: 4, answer: "className", isCorrect: true}
    ]
  }
];

export {QUIZ_DATA};