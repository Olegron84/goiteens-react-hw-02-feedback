import styles from "./Statistics.module.css"
function Statistics({ good, neutral, bad, total, positivePercentage}) {
    return (
      <div>
        <p className={styles.good}>Good: {good}</p>
        <p className={styles.text}>Neutral: {neutral}</p>
        <p className={styles.bad}>Bad: {bad}</p>
        <p className={styles.total}>Total: {total}</p>
        <p className={styles.total}>
          Positive percentage: {positivePercentage}%
        </p>
      </div>
    );
  }
  export default Statistics;