import React from 'react';
import '../styles/Footer.css';

export default function Footer({ scoreArr, submitQuiz }) {
  return (
    <footer className='quiz_footer'>
      <button
        disabled
        type='button'
        id='submit'
        className='footer_button submit'
        onClick={() => submitQuiz(scoreArr)}
      >
        SUBMIT QUIZ
      </button>
    </footer>
  );
}