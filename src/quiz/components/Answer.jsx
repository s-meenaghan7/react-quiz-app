import React from 'react';
import '../styles/Answer.css';

export default function Answer({ answer, answerChanged, selectedAnswer }) {
  return (
    <div className='answer-container'>
      <label className='answer-button'>
        <input
          type='radio'
          name='answers'
          className='radio'
          value={answer.isCorrect}
          onChange={() => answerChanged(answer.id)}
          checked={selectedAnswer === answer.id}
        />
      </label>
      <span className='answer'>
        {answer.answer}
      </span>
    </div>
  );
}
