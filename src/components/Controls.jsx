import React from 'react';

export default function Controls({index, setIndex, scoreArr, selectedAnswers, selectedAnswer, setSelectedAnswer, lastIndex, setQuizSubmitted}) {

    const getValue = () => (document.querySelector('input[name = "answers"]:checked').value === 'true');

    const getFinalScore = (arr) => arr.reduce((total, curr) => { return total + curr; }, 0);

    let answerIsSelected = () => {
        const answers = document.querySelectorAll('input[name = "answers"]');
    
        for (const answer of answers)
          if (answer.checked) return true;
    
        return false;
    };

    const prevButtonHandler = () => {
        if (index === 0) return;
    
        if (answerIsSelected()) {
          scoreArr[index] = getValue() ? 1 : 0;
        }
        
        setIndex((index > 0) ? index - 1 : index);
        selectedAnswers[index] = selectedAnswer;
        setSelectedAnswer(selectedAnswers[index - 1]);
    };

    const nextButtonHandler = () => {
        if (index === lastIndex) return;
    
        if (answerIsSelected()) {
          scoreArr[index] = getValue() ? 1 : 0;
        }
    
        setIndex((index < lastIndex) ? index + 1 : index);
        selectedAnswers[index] = selectedAnswer;
        setSelectedAnswer(selectedAnswers[index + 1]);
    };

    const submitQuiz = (scoreArr) => {
        scoreArr[index] = getValue() ? 1 : 0;
        const score = getFinalScore(scoreArr);

        console.log('Final score: ' + score + ' out of ' + (lastIndex + 1));
    
        setQuizSubmitted(true);
    };

    return (
        <div className='controls'>
            <button onClick={ () => prevButtonHandler() }>
                Previous
            </button>

            <button onClick={ () => nextButtonHandler() }>
                Next
            </button>

            <button id='submit' onClick={ () => submitQuiz(scoreArr) } hidden>
                Submit
            </button>
        </div>
    );
};