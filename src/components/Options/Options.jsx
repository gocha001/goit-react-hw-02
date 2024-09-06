import css from "./Options.module.css";

function Options({ options, handleClick, total, handleReset }) {
  return (
    <div>
      <ul className={css.options}>
        {options.map((option) => {
          return (
            <li key={option}>
              <button
                className={css.button}
                type="button"
                value={option}
                onClick={() => handleClick(option)}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
      {total > 0 && (
        <button
          className={css.reset}
          type="button"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
