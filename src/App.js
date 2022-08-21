import { useState } from 'react';
import './App.css';

function App() {
  let [index, setIndex] = useState(0); // shared index for the questions and scoreArr data structures
  const [scoreArr] = useState([]);

  const getValue = () => (document.querySelector('input[name = "answers"]:checked').value === 'true'); 

  const prevButtonHandler = () => {
    if (!radioButtonSelected()) return;

    setIndex((index > 0) ? index - 1 : index);
    scoreArr[index] = getValue() ? 1 : 0;
  };

  const nextButtonHandler = () => {
    if (!radioButtonSelected()) return;

    setIndex((index < questions.length - 1) ? index + 1 : index);
    scoreArr[index] = getValue() ? 1 : 0;
  };

  let radioButtonSelected = () => {
    const answers = document.querySelectorAll('input[name = "answers"]');

    for (const answer of answers)
      if (answer.checked) return true;

    return false;
  }

  return (
    <div className="App">
      <div className='question-section'>
        <h4>Question {index + 1}/{questions.length}</h4>
        <h2>{questions[index].question}</h2>
      </div>

      <div className='answer-section'> 
        {
          questions[index].options.map((answer, i) => 
            <label key={i}>
              <input type='radio' name='answers' value={answer.isCorrect} /> {answer.answer}
            </label>
          )
        }
      </div>

      <div className='controls'>
        <button onClick={ () => prevButtonHandler() }>
          Previous
        </button>

        <button onClick={ () => nextButtonHandler() }>
          {(index === questions.length - 1) ? 'Submit' : 'Next'}
        </button>

        {/* test button, delete later */}
        <button onClick={() => console.log(scoreArr.reduce((total, curr) => { return total + curr; }, 0))}>
          Get Score
        </button>

      </div>
    </div>
  );
}

const questions = [
  {
    question: "How do you set state in a functional React component?",
    options: [
      {answer: "By declaring a state variable and assigning an object.", isCorrect: false},
      {answer: "By using the useState() Hook.", isCorrect: true},
      {answer: "By using the setState() method on 'this'.", isCorrect: false},
      {answer: "Functional React components do not support state.", isCorrect: false}
    ]
  },
  {
    question: "When rendering a list of elements in JSX using the JavaScript map() method, what is required for each element rendered?",
    options: [
      {answer: "id", isCorrect: false},
      {answer: "index", isCorrect: false},
      {answer: "key", isCorrect: true},
      {answer: "data", isCorrect: false}
    ]
  },
  {
    question: "What is used to pass data from parent to child component?",
    options: [
      {answer: "props", isCorrect: true},
      {answer: "state", isCorrect: false},
      {answer: "Component", isCorrect: false},
      {answer: "render()", isCorrect: false}
    ]
  },
  {
    question: "What keyword is used for assigning classes for styling JSX elements within JSX code?",
    options: [
      {answer: "styles", isCorrect: false},
      {answer: "class", isCorrect: false},
      {answer: "id", isCorrect: false},
      {answer: "className", isCorrect: true}
    ]
  }
]

export default App;
