import { useSelector, useDispatch } from "react-redux";
import {
  moveX,
  moveO,
  turnX,
  turnO,
  winnerX,
  winnerO,
  winnerDraw,
} from "../../state/actions/allActions";
import { detWinner } from "../../functions";

function GameBoard() {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const turn = useSelector((state) => state.turn);

  const table = [];
  for (let row = 0; row < 3; row++) {
    const tr = [];
    for (let col = 0; col < 3; col++) {
      tr.push(
        <td
          key={`${row},${col}`}
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (turn === "X") {
              dispatch(moveX(row, col));
              dispatch(turnO());
            } else {
              dispatch(moveO(row, col));
              dispatch(turnX());
            }
            const winner = detWinner(board);
            if (winner === "X") dispatch(winnerX());
            if (winner === "O") dispatch(winnerO());
            if (winner === "Draw") dispatch(winnerDraw());
          }}
        >
          {board[row][col]}
        </td>
      );
    }
    table.push(<tr key={`${row}`}>{tr}</tr>);
  }
  return (
    <div>
      <table>
        <tbody>{table}</tbody>
      </table>
    </div>
  );
}

export default GameBoard;
