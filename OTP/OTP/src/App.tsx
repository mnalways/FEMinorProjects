import { useEffect, useRef, useState } from "react";

import Style from "./App.module.scss";

function App() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);
  useEffect(() => {
    if (inputRefs.current?.[1]) {
      inputRefs.current[1].focus();
    }
  }, []);
  const handleOnChange = (e: any) => {
    // let value = e.target.value;
    // value.slice;
  };

  const handleKeyDown = (e: any) => {};

  const getInputBoxes = () => {
    return otp.map((value, index: number) => {
      return (
        <input
          key={index}
          className={Style.boxes}
          type="text"
          value={value}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          ref={(reff) => (inputRefs.current[index] = reff)}
        />
      );
    });
  };
  return <div className={Style.container}>{getInputBoxes()}</div>;
}

export default App;
