import "./App.css";
import GameBoard from "../gameBoard/GameBoard";
import ViewBoard from "../viewBoard/ViewBoard";
import ViewTurn from "../viewTurn/ViewTurn";
import PlayAgain from "../playAgain/PlayAgain";
import { useSelector } from "react-redux";

function App() {
  const winner = useSelector((state) => state.winner);

  if (winner === "") {
    return (
      <div className="d-flex flex-column align-items-center mt-5">
        <GameBoard />
        <div className="mt-3">
          <ViewTurn />
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column align-items-center mt-5">
        <ViewBoard />
        <div className="my-3">
          <ViewTurn />
        </div>
        <PlayAgain />
      </div>
    );
  }
}

export default App;
