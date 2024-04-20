import React from 'react'
import Style from "./inputContainer.module.scss";

interface Props {
    onChangeText: (value: string) => void;
    text: string;
}
const InputContainer = ({text, onChangeText}: Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChangeText(e.target.value);
    }
    const switchToUpperCase = () => {
        onChangeText(text.toUpperCase());
    }
    const switchToLowerCase = () => {
        onChangeText(text.toLowerCase());
    }

  return (
    <div className={Style.inputContainer}>
        <textarea
          className={Style.textArea}
          value={text}
          onChange={handleChange}
        />
      <div className={Style.buttonContainers}>
        <button className={Style.buttons} onClick={switchToUpperCase}>
          Switch To Upper Case
        </button>
        <button className={Style.buttons} onClick={switchToLowerCase}>
          Switch To Lower Case
        </button>
      </div>
        <div className={Style.preview}>{text}</div>
    </div>
  );
}

export default InputContainer