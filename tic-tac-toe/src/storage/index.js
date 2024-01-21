export function saveGameStorage({ board, turn, winner }) {
  localStorage.setItem("turn", turn);
  localStorage.setItem("board", JSON.stringify(board));
  localStorage.setItem("winner", winner);
}

export function resetGameStorage() {
  localStorage.removeItem("board");
  localStorage.removeItem("turn");
  localStorage.removeItem("winner");
}
