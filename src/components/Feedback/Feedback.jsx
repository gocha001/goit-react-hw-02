import css from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total }) {
  const positiveFeedback = Math.round((good / total) * 100);

  return (
    <>
      <div className={css.feedback}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {positiveFeedback}%</p>
      </div>
    </>
  );
}

export default Feedback;
