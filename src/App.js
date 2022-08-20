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
    question: "This is the first question",
    options: [
      {answer: "First answer", isCorrect: false},
      {answer: "Second answer", isCorrect: true},
      {answer: "Third answer", isCorrect: false},
      {answer: "Fourth answer", isCorrect: false}
    ]
  },
  {
    question: "This is the second question",
    options: [
      {answer: "FIRST answer", isCorrect: false},
      {answer: "SECOND answer", isCorrect: true},
      {answer: "THIRD answer", isCorrect: false},
      {answer: "FOURTH answer", isCorrect: false}
    ]
  },
  {
    question: "This is the third question",
    options: [
      {answer: "First ANSWER", isCorrect: false},
      {answer: "Second ANSWER", isCorrect: true},
      {answer: "Third ANSWER", isCorrect: false},
      {answer: "Fourth ANSWER", isCorrect: false}
    ]
  },
  {
    question: "This is the fourth question",
    options: [
      {answer: "FIRST ANSWER", isCorrect: false},
      {answer: "SECOND ANSWER", isCorrect: true},
      {answer: "THIRD ANSWER", isCorrect: false},
      {answer: "FOURTH ANSWER", isCorrect: false}
    ]
  }
]

export default App;
