import React from 'react';
import '../styles/Answer.css';

export default function Answer({ answer, answerChanged, selectedAnswer }) {
  return (
    <label className='answer'>
      <input
        type='radio'
        name='answers'
        className='radio'
        value={answer.isCorrect}
        onChange={() => answerChanged(answer.id)}
        checked={selectedAnswer === answer.id}
      /> {answer.answer}
    </label>
  );
}
