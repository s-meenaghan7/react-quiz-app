import React from 'react';
import Answer from './Answer';
import '../styles/AnswerSection.css';

export default function AnswerSection({ index, currentAnswers, selectedAnswer, setSelectedAnswer, selectedAnswers }) {

  const allQuestionsAnswered = (answers) => (answers.findIndex(ans => ans === null) === -1);

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

  return (
    <div className='answer-section'>
      {
        currentAnswers.options
          .map((answer) =>
            <Answer
              key={answer.id}
              answer={answer}
              answerChanged={answerChanged}
              selectedAnswer={selectedAnswer}
            />
          )
      }
    </div>
  );
}
