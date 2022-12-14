import React from 'react';
import '../styles/Result.css';

export default function Result({ points, total }) {

  const percentage = ((points / total) * 100).toFixed(0) + '%';

  return (
    <div className='result'>
      <h1>Quiz Complete!</h1>
      <h2>Final score: {points} out of {total} ({percentage})</h2>
    </div>
  );
}
