import { useState } from 'react';
import './App.css';

/*
Issues/todos:
  Making no selection and pressing next or prev button causes errors because of null 'value' of radio button
  May be able to (And should do this if I can) remove the setScoreArr function declaration entirely, to prevent the warning.
*/

function App() {
  let [i, setIndex] = useState(0); // i accesses both the questions and scoreArr data structures
  const [scoreArr, setScoreArr] = useState([]);

  const getValue = () => (document.querySelector('input[name = "answers"]:checked').value === 'true'); 

  const prevButtonHandler = () => {
    setIndex((i > 0) ? i - 1 : i);
    scoreArr[i] = getValue() ? 1 : 0;
  };

  const nextButtonHandler = () => {
    setIndex((i < questions.length - 1) ? i + 1 : i);
    scoreArr[i] = getValue() ? 1 : 0;
  };

  return (
    <div className="App">
      <div className='question-section'>
        <h4>Question {i + 1}/{questions.length}</h4>
        <h2>{questions[i].question}</h2>
      </div>

      <div className='answer-section'> {/* TODO: render answers dynamically with map (or foreach loop?)*/}
        <label>
          <input type='radio' name='answers' value={questions[i].options[0].isCorrect} /> {questions[i].options[0].answer}
        </label>
        <label>
          <input type='radio' name='answers' value={questions[i].options[1].isCorrect} /> {questions[i].options[1].answer}
        </label>
        <label>
          <input type='radio' name='answers' value={questions[i].options[2].isCorrect} /> {questions[i].options[2].answer}
        </label>
        <label>
          <input type='radio' name='answers' value={questions[i].options[3].isCorrect} /> {questions[i].options[3].answer}
        </label>
      </div>

      <div className='controls'>
        <button onClick={() => prevButtonHandler() }>
          Previous
        </button>

        <button onClick={ () => nextButtonHandler() }>
          {(i === questions.length - 1) ? 'Submit' : 'Next'}
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
