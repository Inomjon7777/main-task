import { useSelector } from "react-redux";

function ViewBoard() {
  const board = useSelector((state) => state.board);
  const table = [];

  for (let row = 0; row < 3; row++) {
    const tr = [];
    for (let col = 0; col < 3; col++) {
      tr.push(<td key={`${row},${col}`}>{board[row][col]}</td>);
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

export default ViewBoard;
