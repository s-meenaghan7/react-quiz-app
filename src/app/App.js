import './App.css';
import Quiz from '../quiz/Quiz';
import { QUIZ_DATA } from './quiz_data/QuizData';

export default function App() {

  return (
    <div className="App">
      <Quiz 
        QUIZ_DATA={QUIZ_DATA}
      />
    </div>
  );
}


