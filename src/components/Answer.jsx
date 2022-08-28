import React from 'react';

export default function Answer({answer, answerChanged, selectedAnswer}) {
    return (
        <label className='answer'>
            <input type='radio'
                name='answers'
                value={answer.isCorrect}
                onChange={() => answerChanged(answer.id)}
                checked={selectedAnswer === answer.id}
            /> {answer.answer}
        </label>
    );
}
