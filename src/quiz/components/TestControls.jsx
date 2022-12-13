import React from 'react';

export default function TestControls({ selectedAnswer, selectedAnswers, scoreArr }) {
  return (
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
  );
}
