import React from 'react';

export default function Result({points, total}) {
    return (
        <div className='App'>
            <h1>Quiz Complete!</h1>
            <h2>Final score: {points} out of {total}</h2>
        </div>
    );
}
