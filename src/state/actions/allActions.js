export function moveX(row, col) {
  return {
    type: "board/moveX",
    payload: [row, col],
  };
}

export function moveO(row, col) {
  return {
    type: "board/moveO",
    payload: [row, col],
  };
}

export function eraseBoard() {
  return {
    type: "board/erase",
  };
}

export function turnX() {
  return {
    type: "turn/x",
  };
}

export function turnO() {
  return {
    type: "turn/o",
  };
}

export function eraseTurn() {
  return {
    type: "turn/erase",
  };
}

export function winnerX() {
  return {
    type: "winner/x",
  };
}

export function winnerO() {
  return {
    type: "winner/o",
  };
}

export function winnerDraw() {
  return {
    type: "winner/draw",
  };
}

export function eraseWinner() {
  return {
    type: "winner/erase",
  };
}
