import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function addGood() {
    setGood(good + 1);
  }

  function addNeutral() {
    setNeutral(neutral + 1);
  }

  function addBad() {
    setBad(bad + 1);
  }

  function TotalFeedback() {
    const sum = good + neutral + bad;
    return sum;
  }

  function PositiveFeedbackPercent() {
    const sum = TotalFeedback();
    const percentage = Math.round((good / sum) * 100);
    return isNaN(percentage) ? 0 : percentage;
  }

  return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGoodcl={addGood}
            onNeutralcl={addNeutral}
            onBadcl={addBad}
          />
        </Section>

        <Section title="Statistics">
          {/* {TotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : ( */}
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={TotalFeedback()}
              positivePercentage={PositiveFeedbackPercent()}
            />
          {/* )} */}
        </Section>
      </div>
  );
}

export default App;
