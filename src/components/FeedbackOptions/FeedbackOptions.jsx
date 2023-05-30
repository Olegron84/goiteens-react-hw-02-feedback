function FeedbackOptions({ onGoodCl, onNeutralCl, onBadCl }) {
  return (
    <div>
      <button onClick={onGoodCl}>
        Good
      </button>
      <button onClick={onNeutralCl}>
        Neutral
      </button>
      <button onClick={onBadCl}>
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;