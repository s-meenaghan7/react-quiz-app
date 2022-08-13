import { useState } from 'react';
import './App.css';

function App() {
  let [q_index, setQIndex] = useState(0);

  return (
    <div className="App">
      <div className='question-section'>
        <h4>Question {q_index + 1}/{questions.length}</h4>
        <h2>{questions[q_index].question}</h2>
      </div>

      <div className='answer-section'>
        <label> <input type='radio' name='answers' value='option1' /> {questions[q_index].options[0].answer} </label>
        <label> <input type='radio' name='answers' value='option2' /> {questions[q_index].options[1].answer} </label>
        <label> <input type='radio' name='answers' value='option3' /> {questions[q_index].options[2].answer} </label>
        <label> <input type='radio' name='answers' value='option4' /> {questions[q_index].options[3].answer} </label>
      </div>

      <div className='controls'>
        <button onClick={() => (q_index > 0) ? setQIndex(q_index - 1) : q_index}>
          Previous
        </button>

        <button onClick={() => (q_index < questions.length - 1) ? setQIndex(q_index + 1) : q_index}>
          Submit
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
