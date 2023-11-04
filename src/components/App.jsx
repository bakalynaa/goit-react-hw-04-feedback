import Statistics from './Statistics';
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';


export const App = () => {
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = el => {
    setStatistics(prev => ({ ...prev, [el]: prev[el] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(statistics).reduce((acc, item) => acc + item);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((statistics.good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={Object.keys(statistics)}
                         onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title='Statistics'>
        {countTotalFeedback() === 0
          ? <Notification message={'There is no feedback'} />
          : <Statistics good={statistics.good}
                        neutral={statistics.neutral}
                        bad={statistics.bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()} />}
      </Section>
    </>
  );
};
