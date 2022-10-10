import { useSelector } from "react-redux";

function ViewTurn() {
  const turn = useSelector((state) => state.turn);
  const winner = useSelector((state) => state.winner);
  return winner === "" ? (
    <h3>Turn: {turn} Player</h3>
  ) : (
    <h3>Winner: {winner}</h3>
  );
}

export default ViewTurn;
