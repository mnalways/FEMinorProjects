import React, { useEffect, useState } from "react";
import Styles from "./Main.module.scss";
import Box from "./Box";

const WINNING_STATE = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
const MainContainer = () => {
  const [gameState, setGameState] = useState<number[]>([]);
  const [isCrossTurn, setIsCrossTurn] = useState<boolean>(true);
  const [announceWinner, setAnnounceWinner] = useState<boolean>(false);

  useEffect(() => {
    const arr: number[] = new Array(9);
    arr.fill(0);
    setGameState(arr);
  }, []);

  const checkWinner = () => {
    const isAWinner = WINNING_STATE.some((state) => {
      return (
        state.every((id) => gameState[id] === 1) ||
        state.every((id) => gameState[id] === 2)
      );
    });
    if (isAWinner) {
      setAnnounceWinner(true);
    } else {
      setIsCrossTurn((prev) => !prev);
    }
  };

  const onStateChange = (id: number) => {
    if (announceWinner) return;
    // how they are doing
    gameState[id] = isCrossTurn ? 1 : 2;
    setGameState([...gameState]);
    checkWinner();
  };

  const getRenderdBoxes = (item: number, index: number) => {
    let val = "";
    if (item === 1) {
      val = "X";
    }
    if (item === 2) {
      val = "O";
    }
    return <Box value={val} onClickHandler={() => onStateChange(index)} />;
  };

  const ShowWinningMessage = (val: string) =>
    `Yess Mayank is the Winner (${val})`;

  return (
    <div>
      <h2 hidden={!announceWinner}>
        {ShowWinningMessage(isCrossTurn ? "X" : "O")}
      </h2>
      <div className={Styles.parentBox}>
        {gameState.map((item, index) => getRenderdBoxes(item, index))}
      </div>
    </div>
  );
};

export default MainContainer;
// MN =>
// Enum for Players (No constant values)
// Single responsibility principle

// Damini =>
// No Code repetation
// use Enums
// Try to break components by keeping Single responsibility principle in mind
// use of arr.some() arr.every()
