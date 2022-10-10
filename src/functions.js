export function detWinner(board) {
  if (
    board[0][0] === board[0][1] &&
    board[0][1] === board[0][2] &&
    board[0][2] !== ''
  )
    return board[0][2];

  if (
    board[1][0] === board[1][1] &&
    board[1][1] === board[1][2] &&
    board[1][2] !== ''
  )
    return board[1][2];

  if (
    board[2][0] === board[2][1] &&
    board[2][1] === board[2][2] &&
    board[2][2] !== ''
  )
    return board[2][2];

  if (
    board[0][0] === board[1][0] &&
    board[1][0] === board[2][0] &&
    board[2][0] !== ''
  )
    return board[2][0];

  if (
    board[0][1] === board[1][1] &&
    board[1][1] === board[2][1] &&
    board[2][1] !== ''
  )
    return board[2][1];

  if (
    board[0][2] === board[1][2] &&
    board[1][2] === board[2][2] &&
    board[2][2] !== ''
  )
    return board[2][2];

  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[2][2] !== ''
  )
    return board[2][2];

  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[2][0] !== ''
  )
    return board[2][0];

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === '') return "Pending";
    }
  }

  return "Draw";
}
