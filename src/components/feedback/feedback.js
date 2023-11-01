export const Feedback = ({ state }) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {state.total}</p>
    </>
  );
};
