import css from './feedbackOptions.module.css';

export const FeedbackOptions = ({ options }) => {
  return (
    <>
      <button className={css.btnG} name="good" onClick={options}>
        Good
      </button>
      <button className={css.btnN} name="neutral" onClick={options}>
        Neutral
      </button>
      <button className={css.btnB} name="bad" onClick={options}>
        Bad
      </button>
    </>
  );
};
