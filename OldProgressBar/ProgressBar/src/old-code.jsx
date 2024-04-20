import { useEffect, useRef, useState } from "react";
import Styles from "./oldCode.module.scss";

const OFFSET = 10;
const INTERVAL = 1000;
const FULLFILLED = 100;
function OldProgressbar() {
  const [filled, setFilled] = useState(0);
  const timer = useRef(0);
  useEffect(() => {
    timer.current = setInterval(() => {
      setFilled((prev) => prev + OFFSET);
    }, INTERVAL);
    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    if (filled == FULLFILLED) clearInterval(timer.current);
  }, [filled]);
  return (
    <div className={Styles.container}>
      <div className={Styles.bar}>
        <div className={Styles.progress} style={{ width: `${filled}%` }}></div>
      </div>
    </div>
  );
}

export default OldProgressbar;
