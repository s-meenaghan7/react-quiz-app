import React from 'react';
import '../styles/QuestionSection.css';

export default function QuestionSection({ current, total, question }) {
  return (
    <div className='question-section'>
      <h3>Question {current}/{total}</h3>
      <h2>{question}</h2>
    </div>
  );
};
