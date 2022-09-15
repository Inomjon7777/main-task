const History = ({ histories, currentStep, onStep }) => {
  return (
    <ol>
      {histories.map((h, idx) => {
        const isCurrent = currentStep === idx;
        return (
          <li key={idx}>
            <button disabled={isCurrent} onClick={() => onStep(idx)}>
              Go to
              {idx === 0
                ? " game start"
                : ` move #${idx} ${isCurrent ? "(current)" : ""} `}
            </button>
          </li>
        );
      })}
    </ol>
  );
};

export default History;
