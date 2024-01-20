/* eslint-disable react/prop-types */
import { Square } from "./Square";

export function Board({ board, updateBoard }) {
  return (
    <section className="game">
      {board.map((value, index) => (
        <Square key={index} onClick={() => updateBoard(index)}>
          {value}
        </Square>
      ))}
    </section>
  );
}
