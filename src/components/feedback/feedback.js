export const Feedback = ({ state, plusFeedBack }) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <button name="good" onClick={plusFeedBack}>
        Good
      </button>
      <button name="neutral" onClick={plusFeedBack}>
        Neutral
      </button>
      <button name="bad" onClick={plusFeedBack}>
        Bad
      </button>
      <h2>Statistics</h2>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
    </>
  );
};
