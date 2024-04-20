import { useEffect, useMemo, useState } from "react";
import Style from "./App.module.scss";

const Action = {
  CONTINUE: "Continue",
  RESET: "Reset",
  PAUSE: "Pause",
};
const getIntervals = () => {
  let timer: number;
  const setMyInterval = (fn: () => void, interval: number) => {
    clearInterval(timer);
    const fnWithContext = fn.bind(this);
    timer = setInterval(() => {
      fnWithContext();
    }, interval);
  };
  const clearMyTimer = () => {
    clearInterval(timer);
  };
  console.log("useGetIntervals");
  return { setMyInterval, clearMyTimer };
};

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const { setMyInterval, clearMyTimer } = useMemo(() => getIntervals(), []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isRunning) return;
    if (e.target.value) {
      const value = Number(e.target.value);
      !isNaN(value) && value > 0 ? setTime(value) : setTime(0);
    } else setTime(0);
  };

  useEffect(() => {
    if (time == 0) {
      clearMyTimer();
    }
  }, [clearMyTimer, time]);

  const handleRun = () => {
    if (!isRunning) setMyInterval(() => setTime((prev) => prev - 1), 1000);
    else clearMyTimer();
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className={Style.Container}>
      <div className={Style.countContainer}>
        <h1>CountDown</h1>
        <input
          className={Style.box}
          type="text"
          value={time}
          onChange={handleChange}
        />
        <div className={Style.buttonContainer}>
          <div className={Style.leftButton} onClick={() => handleRun()}>
            {isRunning ? Action.PAUSE : Action.CONTINUE}
          </div>
          <div className={Style.button} onClick={() => handleReset()}>
            Reset
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
