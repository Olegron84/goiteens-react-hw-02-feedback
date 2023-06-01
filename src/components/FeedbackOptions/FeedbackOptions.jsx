import styles from "./FeedbackOptions.module.css"
function FeedbackOptions({ onGoodCl, onNeutralCl, onBadCl }) {
  return (
    <div>
      <button onClick={onGoodCl} className={styles.positive}>
        Good
      </button>
      <button onClick={onNeutralCl} className={styles.button}>
        Neutral
      </button>
      <button onClick={onBadCl} className={styles.negative}>
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;