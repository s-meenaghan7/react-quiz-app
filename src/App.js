import { useState } from 'react';
import './App.css';

function App() {
  let [index, setIndex] = useState(0); // shared index for the questions and scoreArr data structures
  const [scoreArr] = useState([]);
  const [selectedAnswers] = useState([...questions[index].options.map(() => null)]);
  let [selectedAnswer, setSelectedAnswer] = useState(null);
  let [quizComplete, setQuizComplete] = useState(false);

  const getValue = () => (document.querySelector('input[name = "answers"]:checked').value === 'true'); 

  const allQuestionsAnswered = (answers) => (answers.findIndex(ans => ans === null) === -1);

  let getFinalScore = (arr) => arr.reduce((total, curr) => { return total + curr; }, 0);

  const prevButtonHandler = () => {
    if (index === 0) return;

    if (answerIsSelected()) {
      scoreArr[index] = getValue() ? 1 : 0;
    }
    
    setIndex((index > 0) ? index - 1 : index);

    selectedAnswers[index] = selectedAnswer;
    setSelectedAnswer(selectedAnswers[index - 1]);
  };

  const nextButtonHandler = () => {
    if (index === questions.length - 1) return;

    if (answerIsSelected()) {
      scoreArr[index] = getValue() ? 1 : 0;
    }

    setIndex((index < questions.length - 1) ? index + 1 : index);

    selectedAnswers[index] = selectedAnswer;
    setSelectedAnswer(selectedAnswers[index + 1]);
  };

  const submitQuiz = (arr) => {
    scoreArr[index] = getValue() ? 1 : 0;
    const score = getFinalScore(arr);
    console.log('Final score: ' + score + ' out of ' + questions.length);

    setQuizComplete(true);
  };

  let answerIsSelected = () => {
    const answers = document.querySelectorAll('input[name = "answers"]');

    for (const answer of answers)
      if (answer.checked) return true;

    return false;
  };
  
  const answerChanged = (answerId) => {
    // this happens first so that selectedAnswer is not null (when radio button is clicked) and then...
    selectedAnswer = answerId;

    // ... this line actually assigns the not-null selectedAnswer value to the array of selectedAnswers
    selectedAnswers[index] = selectedAnswer;
    
    // this must be called, or a radio button cannot actually be selected
    setSelectedAnswer(answerId);

    // reveal the Submit button if all questions have a selected answer
    if (allQuestionsAnswered(selectedAnswers)) {
      const submitButton = document.querySelector('#submit');
      submitButton.removeAttribute('hidden');
    }
  };

  return ((quizComplete)
      ?
    <div className='App'>
      <h1>Quiz Complete!</h1>
      <h2>Final score: {getFinalScore(scoreArr)} out of {questions.length}</h2>
    </div>
      :
    <div className="App">
      <div className='question-section'>
        <h4>Question {index + 1}/{questions.length}</h4>
        <h3>{questions[index].question}</h3>
      </div>

      <div className='answer-section'> 
        {
          questions[index].options
            .map((answer) => 
              <label key={answer.id} className='answer'>
                <input type='radio' name='answers' value={answer.isCorrect} 
                      onChange={() => answerChanged(answer.id)} checked={selectedAnswer === answer.id} 
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
          Next
        </button>

        <button id='submit' onClick={ () => submitQuiz(scoreArr) } hidden>
          Submit
        </button>
      </div>

      <div className='test-controls' hidden>
        <button onClick={() => console.log(scoreArr.reduce((total, curr) => { return total + curr; }, 0))}>
          Get Score
        </button>

        <button onClick={() => console.log(selectedAnswer)}>
          Get selectedAnswer
        </button>

        <button onClick={() => console.log(selectedAnswers)}>
          Get selectedAnswers array
        </button>
      </div>
    </div>
  );
}

const questions = [
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
