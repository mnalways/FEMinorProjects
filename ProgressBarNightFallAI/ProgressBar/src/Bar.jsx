import { useEffect, useState } from "react";
import Style from "./Bar.module.scss";

const Bar = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(width);
      setWidth((prev) => {
        if (prev >= 80) {
          clearInterval(timer);
          return 100;
        }
        return prev + 20;
      });
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(width);
  return (
    <div className={Style.barContainer}>
      <div style={{ background: "green", width: `${width}%` }}></div>
    </div>
  );
};

export default Bar;
