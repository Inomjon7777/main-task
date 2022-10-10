import { useDispatch } from "react-redux";
import {
  eraseBoard,
  eraseTurn,
  eraseWinner,
} from "../../state/actions/allActions";

function PlayAgain() {
  const dispatch = useDispatch();
  return (
    <button
      className="btn btn-secondary btn-lg"
      onClick={() => {
        dispatch(eraseBoard());
        dispatch(eraseTurn());
        dispatch(eraseWinner());
      }}
    >
      Play Again
    </button>
  );
}

export default PlayAgain;
