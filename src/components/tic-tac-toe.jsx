import Board from "./board";
import History from "./history";
import cls from "./main.module.scss";
import { useLocalStorage } from "../hooks/use-local-storage";

const TicTacToe = () => {
  const winner = "";
  const [histories, setHistories] = useLocalStorage("histories", [
    Array(9).fill(""),
  ]);
  const [currentStep, setCurrentStep] = useLocalStorage("step", 0);

  const squares = histories[currentStep];
  let nextPlayer = histories.length % 2 === 1 ? "X" : "O";

  const handleSelect = (idx) => {
    const newSquares = [...squares];
    newSquares[idx] = nextPlayer;

    const newHistories = histories.slice(0, currentStep + 1);
    setHistories([...newHistories, newSquares]);
    setCurrentStep((prev) => prev + 1);
  };

  const handleRestart = () => {
    setHistories([Array(9).fill("")]);
    setCurrentStep(0);
  };

  return (
    <div className={cls.game}>
      <div className={cls["game-board"]}>
        <Board squares={squares} onSelect={handleSelect} />
        <button onClick={handleRestart}>Restart</button>
      </div>
      <div className={cls["game-info"]}>
        <div>{winner ? `Winner: ${winner}` : `Next Player: ${nextPlayer}`}</div>
        <History
          histories={histories}
          currentStep={currentStep}
          onStep={(idx) => setCurrentStep(idx)}
        />
      </div>
    </div>
  );
};

export default TicTacToe;
