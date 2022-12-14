import React, { useEffect } from 'react';
import '../styles/Controls.css';

export default function Controls({ index, setIndex, scoreArr, selectedAnswers, selectedAnswer, setSelectedAnswer, setQuizSubmitted }) {

  useEffect(() => { // Determine if Next and Previous question buttons are disabled/enabled.
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    if (index === 0) {
      prevBtn.setAttribute('disabled', true);
    } else {
      prevBtn.removeAttribute('disabled');
    }

    if (index === (selectedAnswers.length - 1)) {
      nextBtn.setAttribute('disabled', true);
    } else {
      nextBtn.removeAttribute('disabled');
    }
  }, [index, selectedAnswers.length]);

  // gives 1 point if the selected answer for this question is true, 0 if not.
  const getValue = () => (document.querySelector('input[name = "answers"]:checked').value === 'true') ? 1 : 0;

  const answerIsSelected = () => {
    const answers = document.querySelectorAll('input[name = "answers"]');

    for (const answer of answers)
      if (answer.checked) return true;

    return false;
  };

  const prevButtonHandler = () => {
    if (index === 0) return;

    if (answerIsSelected()) {
      scoreArr[index] = getValue();
    }

    setIndex((index > 0) ? index - 1 : index);
    selectedAnswers[index] = selectedAnswer;
    setSelectedAnswer(selectedAnswers[index - 1]);
  };

  const nextButtonHandler = () => {
    if (index === selectedAnswers.length - 1) return;

    if (answerIsSelected()) {
      scoreArr[index] = getValue();
    }

    setIndex((index < selectedAnswers.length - 1) ? index + 1 : index);
    selectedAnswers[index] = selectedAnswer;
    setSelectedAnswer(selectedAnswers[index + 1]);
  };

  const submitQuiz = (scoreArr) => {
    scoreArr[index] = getValue();

    setQuizSubmitted(true);
  };

  return (
    <div className='controls-container'>
      <button id='prev' type='button' className='controls-button' onClick={() => prevButtonHandler()}>
        Previous Question
      </button>

      <button type='button' className='controls-button' id='submit' onClick={() => submitQuiz(scoreArr)} hidden>
        Submit
      </button>

      <button id='next' type='button' className='controls-button' onClick={() => nextButtonHandler()}>
        Next Question
      </button>
    </div>
  );
};
