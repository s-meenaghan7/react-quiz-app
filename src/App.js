import { useState } from 'react';
import './App.css';
import AnswerSection from './components/AnswerSection';
import Controls from './components/Controls';
import QuestionSection from './components/QuestionSection';
import Result from './components/Result';
import TestControls from './components/TestControls';

function App() {
  let [index, setIndex] = useState(0); // shared index for the questions and scoreArr data structures
  const [scoreArr] = useState([]);
  const [selectedAnswers] = useState([...QUIZ_DATA[index].options.map(() => null)]);
  let [selectedAnswer, setSelectedAnswer] = useState(null);
  let [quizSubmitted, setQuizSubmitted] = useState(false);

  const getFinalScore = (arr) => arr.reduce((total, curr) => { return total + curr; }, 0);

  return ((quizSubmitted)
      ?
    <Result 
      points={getFinalScore(scoreArr)}
      total={QUIZ_DATA.length}
    />
      :
    <div className="App">
      <Controls 
        index={index}
        setIndex={setIndex}
        scoreArr={scoreArr}
        selectedAnswers={selectedAnswers}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        lastIndex={QUIZ_DATA.length - 1}
        setQuizSubmitted={setQuizSubmitted}
      />

      <QuestionSection
        current={index + 1}
        total={QUIZ_DATA.length}
        question={QUIZ_DATA[index].question}
      />

      <AnswerSection 
        index={index}
        currentAnswers={QUIZ_DATA[index]}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        selectedAnswers={selectedAnswers}
      />

      <TestControls
        selectedAnswer={selectedAnswer}
        selectedAnswers={selectedAnswers}
        scoreArr={scoreArr}
      />
    </div>
  );
}

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
]

export default App;
