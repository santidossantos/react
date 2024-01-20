import { useState } from "react";
import confetti from "canvas-confetti";
import { TURNS } from "./constants";
import { Square } from "./components/Square";
import { checkEndGame, checkWinner } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { CurrentTurn } from "./components/CurrentTurn";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] !== null || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
      return;
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
      return;
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar partida</button>
      <section className="game">
        {board.map((_, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Square>
        ))}
      </section>

      <CurrentTurn turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
