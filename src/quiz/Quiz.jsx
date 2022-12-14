import { useState } from 'react';
import './Quiz.css';
import AnswerSection from './components/AnswerSection';
import Controls from './components/Controls';
import QuestionSection from './components/QuestionSection';
import Result from './components/Result';
import TestControls from './components/TestControls';

export default function Quiz({ QUIZ_DATA }) {
  let [index, setIndex] = useState(0); // shared index for the questions and scoreArr data structures
  const [scoreArr] = useState([]);
  const [selectedAnswers] = useState([...QUIZ_DATA[index].options.map(() => null)]);
  let [selectedAnswer, setSelectedAnswer] = useState(null);
  let [quizSubmitted, setQuizSubmitted] = useState(false);

  const getFinalScore = (arr) => arr.reduce((total, curr) => { return total + curr; }, 0);

  return ((quizSubmitted)
    ?
    <Result
      points={getFinalScore(scoreArr)}
      total={QUIZ_DATA.length}
    />
    :
    <div className="quiz">
      <Controls
        index={index}
        setIndex={setIndex}
        scoreArr={scoreArr}
        selectedAnswers={selectedAnswers}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        setQuizSubmitted={setQuizSubmitted}
      />

      <QuestionSection
        current={index + 1}
        total={QUIZ_DATA.length}
        question={QUIZ_DATA[index].question}
      />

      <AnswerSection
        index={index}
        currentAnswers={QUIZ_DATA[index]}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        selectedAnswers={selectedAnswers}
      />

      <TestControls
        selectedAnswer={selectedAnswer}
        selectedAnswers={selectedAnswers}
        scoreArr={scoreArr}
      />
    </div>
  );
}
