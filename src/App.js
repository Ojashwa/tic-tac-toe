import React, { useEffect, useState } from "react";
import "./App.css";
import Square from "./Square";

let intialState = new Array(9).fill("");

function App() {
  const [gameState, setGameState] = useState(intialState);
  const [xChange, setxChange] = useState(false);
  useEffect(() => {
    const checkWinner = () => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      console.log(
        "Class: App, Function: checkWinner ==",
        gameState[0],
        gameState[1],
        gameState[2]
      );
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          gameState[a] &&
          gameState[a] === gameState[b] &&
          gameState[a] === gameState[c]
        ) {
          return gameState[a];
        }
      }
      return null;
    };
    const winner = checkWinner();
    if (winner) {
      alert(`Ta Da! ${winner} has won the Game!!!`);
      setGameState(intialState);
    }
  }, [gameState]);
  const handleSquareClick = (index) => {
    let icons = Array.from(gameState);
    icons[index] = xChange ? "X" : "O";
    setGameState(icons);
    setxChange(!xChange);
  };

  return (
    <div className="app-header">
      <div className="header">
        <h3 className="heading-text">Tic-Tac-Toe game using ReactJS</h3>
        <button
          className="clear-button"
          onClick={() => {
            setGameState(intialState);
          }}
        >
          Clear Game
        </button>
      </div>

      <div className="row square-center">
        <Square
          state={gameState[0]}
          handleSquareClick={() => handleSquareClick(0)}
        />
        <Square
          state={gameState[1]}
          handleSquareClick={() => handleSquareClick(1)}
        />
        <Square
          state={gameState[2]}
          handleSquareClick={() => handleSquareClick(2)}
        />
      </div>
      <div className="row square-center">
        <Square
          state={gameState[3]}
          handleSquareClick={() => handleSquareClick(3)}
        />
        <Square
          state={gameState[4]}
          handleSquareClick={() => handleSquareClick(4)}
        />
        <Square
          state={gameState[5]}
          handleSquareClick={() => handleSquareClick(5)}
        />
      </div>
      <div className="row square-center">
        <Square
          state={gameState[6]}
          handleSquareClick={() => handleSquareClick(6)}
        />
        <Square
          state={gameState[7]}
          handleSquareClick={() => handleSquareClick(7)}
        />
        <Square
          state={gameState[8]}
          handleSquareClick={() => handleSquareClick(8)}
        />
      </div>
    </div>
  );
}

export default App;
