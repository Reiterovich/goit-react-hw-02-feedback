import css from './feedbackOptions.module.css';

export const FeedbackOptions = ({ options }) => {
  const green = css.btnG;
  const white = css.btnN;
  const red = css.btnB;

  const arrey = [
    { name: 'good', class: green },
    { name: 'neutral', class: white },
    { name: 'bad', class: red },
  ];

  return (
    <>
      {arrey.map(ar => (
        <button
          key={ar.name}
          className={ar.class}
          name={ar.name}
          onClick={options}
        >
          {ar.name}
        </button>
      ))}
    </>
  );
};
