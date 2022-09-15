import cls from "./main.module.scss";

const Board = ({ squares = [], onSelect }) => {
  return (
    <div className={cls.squares}>
      {squares.map((square, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className={cls.square}
          disabled={square}
        >
          {square}
        </button>
      ))}
    </div>
  );
};

export default Board;
