import React, { useEffect, useState } from "react";

import "./styles.css";

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (currentSquare) => {
    let copySquares = [...squares];
    if (winner || copySquares[currentSquare]) return;
    copySquares[currentSquare] = isXTurn ? "X" : "O";
    setSquares(copySquares);
    setIsXTurn(!isXTurn);
  };

  const getWinner = () => {
    const turn = isXTurn ? "O" : "X";
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [1, 4, 7],
      [0, 3, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (squares[x] === turn && squares[y] === turn && squares[z] === turn)
        return true;
    }

    return false;
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
    setWinner(null);
  };

  function Square({ value, onClick }) {
    return (
      <button onClick={onClick} className="square">
        {value}
      </button>
    );
  }

  useEffect(() => {
    if (getWinner()) setWinner(`${isXTurn ? "O" : "X"}`);
    if (squares.every((square) => square !== "")) setWinner("DRAW");
  }, [squares]);

  console.log(squares);

  return (
    <>
      <div className="tic-tac-toe-container">
        <div className="row">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <div className="winner">
        {winner && (
          <div>
            {winner === "DRAW" ? (
              <h2>We have a draw! Please restart</h2>
            ) : (
              <h2>We have a winner, {winner}. Please restart</h2>
            )}
            <button onClick={handleRestart}>Restart</button>
          </div>
        )}
      </div>
    </>
  );
}

export default TicTacToe;
