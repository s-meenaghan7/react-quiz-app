import { useState } from 'react';
import './App.css';

function App() {
  let [index, setIndex] = useState(0); // shared index for the questions and scoreArr data structures
  const [scoreArr] = useState([]);
  let [selectedAnswer, setSelectedAnswer] = useState(null);
  // create a MAP to store the selected answers for each question in memory! 
  // so: when you answer q 1 > continue to q 2 > go BACK to q 1 > the previously selected answer for q 1 will be selected!

  const getValue = () => (document.querySelector('input[name = "answers"]:checked').value === 'true'); 

  const prevButtonHandler = () => {
    if (!answerIsSelected()) return;

    setIndex((index > 0) ? index - 1 : index);
    scoreArr[index] = getValue() ? 1 : 0;
    setSelectedAnswer(null);
  };

  const nextButtonHandler = () => {
    if (!answerIsSelected()) return;

    setIndex((index < questions.length - 1) ? index + 1 : index);
    scoreArr[index] = getValue() ? 1 : 0;
    setSelectedAnswer(null);
  };

  let answerIsSelected = () => {
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
          questions[index].options
            .map((answer) => 
              <label key={answer.id}>
                <input type='radio' name='answers' value={answer.isCorrect} 
                      onChange={() => setSelectedAnswer(answer.id)} checked={selectedAnswer === answer.id} 
                /> {answer.answer}
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

        {/* test button, delete later */}
        <button onClick={() => console.log(selectedAnswer)}>
          Get selectedAnswer
        </button>

      </div>
    </div>
  );
}

const questions = [
  {
    // id: 1,
    question: "How do you set state in a functional React component?",
    options: [
      {id: 1, answer: "By declaring a state variable and assigning an object.", isCorrect: false},
      {id: 2, answer: "By using the useState() Hook.", isCorrect: true},
      {id: 3, answer: "By using the setState() method on 'this'.", isCorrect: false},
      {id: 4, answer: "Functional React components do not support state.", isCorrect: false}
    ]
  },
  {
    // id: 2,
    question: "When rendering a list of elements in JSX using the JavaScript map() method, what is required for each element rendered?",
    options: [
      {id: 1, answer: "id", isCorrect: false},
      {id: 2, answer: "index", isCorrect: false},
      {id: 3, answer: "key", isCorrect: true},
      {id: 4, answer: "data", isCorrect: false}
    ]
  },
  {
    // id: 3,
    question: "What is used to pass data from parent to child component?",
    options: [
      {id: 1, answer: "props", isCorrect: true},
      {id: 2, answer: "state", isCorrect: false},
      {id: 3, answer: "Component", isCorrect: false},
      {id: 4, answer: "render()", isCorrect: false}
    ]
  },
  {
    // id: 4,
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
