import { useState } from "react";
import confetti from "canvas-confetti";
import { TURNS } from "./constants";
import { checkEndGame, checkWinner } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { CurrentTurn } from "./components/CurrentTurn";
import { Board } from "./components/Board";
import { resetGameStorage, saveGameStorage } from "./storage";

function App() {
  const [board, setBoard] = useState(() => {
    const savedBoard = localStorage.getItem("board");
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const savedTurn = localStorage.getItem("turn");
    return savedTurn ? savedTurn : TURNS.X;
  });

  const [winner, setWinner] = useState(() => {
    const savedWinner = localStorage.getItem("winner");
    return savedWinner ? savedWinner : null;
  });

  const updateBoard = (index) => {
    if (board[index] !== null || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }

    saveGameStorage({
      board: newBoard,
      turn: newTurn,
      winner: newWinner || "",
    });
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage();
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar partida</button>

      <Board board={board} updateBoard={updateBoard} />

      <CurrentTurn turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
