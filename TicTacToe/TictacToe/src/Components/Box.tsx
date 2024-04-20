import React, { useState } from "react";
import Styles from "./Main.module.scss";

interface Props {
  value: string;
  onClickHandler: () => void;
}

const Box = ({ value, onClickHandler }: Props) => {
  const [isChanged, setIsChanged] = useState(false);
  const onChangeState = () => {
    if (isChanged) return;
    onClickHandler();
    setIsChanged(true);
  };
  return (
    <div className={Styles.box} onClick={onChangeState}>
      {value}
    </div>
  );
};

export default Box;
