import './TestControls.css';

export default function TestControls({ hidden, selectedAnswer, selectedAnswers, scoreArr }) {
  return (
    <div className='test-controls'>
      <button hidden={hidden} className='test-control' onClick={() => console.log(scoreArr.reduce((total, curr) => { return total + curr; }, 0))}>
        Get Score
      </button>

      <button hidden={hidden} className='test-control' onClick={() => console.log(selectedAnswer)}>
        Get selectedAnswer
      </button>

      <button hidden={hidden} className='test-control' onClick={() => console.log(selectedAnswers)}>
        Get selectedAnswers array
      </button>
    </div>
  );
}
