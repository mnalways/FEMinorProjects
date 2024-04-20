import React, { useState } from 'react'

const Options = ({answers, correctAnswer, onAnswerClick}) => {
    const [checkedOnce, setCheckedOnce] = useState(false);

    React.useEffect(() => {
        return setCheckedOnce(false);
    }, [answers]);

    if (!answers) return null;

    

    const onClickhandler = (ans) => {
        if (!checkedOnce) {
          setCheckedOnce(true);
          if(correctAnswer === ans) {onAnswerClick(true);} else onAnswerClick(false);
        }
    }
    return (
        <>
    <div onClick={() => onClickhandler('answer_a')} className="option">{answers['answer_a']}</div>
    <div onClick={() => onClickhandler('answer_b')} className="option">{answers['answer_b']}</div>
    <div onClick={() => onClickhandler('answer_c')} className="option">{answers['answer_c']}</div>
    <div onClick={() => onClickhandler('answer_d')} className="option">{answers['answer_d']}</div>
    </>
    );
}

export default Options;