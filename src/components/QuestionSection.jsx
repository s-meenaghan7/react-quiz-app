import React from 'react';

export default function QuestionSection({current, total, question}) {
    return (
        <div className='question-section'>
            <h4>Question {current}/{total}</h4>
            <h3>{question}</h3>
        </div>
    );
};
