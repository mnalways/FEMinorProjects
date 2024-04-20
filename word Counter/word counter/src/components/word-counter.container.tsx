import React, { useState } from 'react'
import InputContainer from './InputContainer'
import ShowContainer from './ShowContainer'
import style from "./WordCounterContainer.module.scss";

const WordCounterContainer = () => {
  const [text, setText] = useState('hi');
  return (
    <div className={style.mainContainer}>
      <h1>My Word Counter</h1>
      <ShowContainer text={text} />
      <InputContainer onChangeText={setText} text={text} />
    </div>
  );
}

export default WordCounterContainer