import React, { useState } from 'react'
import Question from './Question';
import Options from './Options';


const QuizContainer = ({data}) => {
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [positivePoints, setPositivePoints] = useState(0);
const [negativePoints, setNegativePoints] = useState(0);
if(!data) return <p>loading...</p>;

const changeQuestion = () => {
  setCurrentQuestionIndex((prev) => prev + 1);
}

const setPoints = (flag) => {
  flag ? setPositivePoints((prev) => prev+1) : setNegativePoints((prev) => prev+1)
}
const buttonProperty = currentQuestionIndex === data.length && 'hidden';

  return (
    <>
    <h1>P Points {positivePoints}</h1>
    <h1>N Points {negativePoints}</h1>
      <div className="container">
        <Question question={data[currentQuestionIndex].question} />
        <div className="options">
          <Options answers={data[currentQuestionIndex].answers} correctAnswer={data[currentQuestionIndex].correct_answer} onAnswerClick={setPoints}/>
        </div>
        <button {...buttonProperty} onClick={changeQuestion}>
          Next
        </button>
      </div>
    </>
  );
}

export default QuizContainer;