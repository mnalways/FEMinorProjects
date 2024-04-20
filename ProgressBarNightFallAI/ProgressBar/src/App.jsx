/**
 * Create a progress bar that is 200px wide, and 20px tall and loads from 0 to 100% of its width in 5 seconds (20% every 1 second). No CSS animations - use JS to advance the loading bar until 100%.
 * Create a button that adds progress bars to the DOM on click
 * Update your code so that only 1 progress bar can be loading at a time, but you can still add progress bars to the DOM on a button click. The next progress bar should begin loading once the previous bar has completed loading.
 * Update your code so that 5 progress bars can be loading at a time, but you can still add progress bars to the DOM on button click. A bar should only begin loading if fewer than 5 are currently loading.
 * Add a button next to each progress bar to remove the progress bar from the DOM when clicked
 */

import { useState } from "react";
import "./App.css";
import Bar from "./Bar";
import Style from "./App.module.scss";

function generateId() {
  // Combine timestamp and random number
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
}

function App() {
  const [bars, setBars] = useState([]);
  const handleClick = () => {
    const barsCopy = [...bars];
    barsCopy.push({ id: generateId(), paused: true });
    setBars(barsCopy);
  };
  return (
    <div className={Style.mainContainer}>
      <button onClick={handleClick}>Add Bar</button>
      <div>
        {bars.map((bar) => (
          <Bar key={bar.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
