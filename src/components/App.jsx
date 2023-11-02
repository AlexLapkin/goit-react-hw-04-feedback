//import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = option => {
    setState(prevState => {
      return {
        ...state,
        [option]: prevState[option] + 1,
      };
    });
  };

  const countTotalFeedback = () =>
    Object.values(state).reduce((acc, value) => acc + value, 0);

  const countPositiveFeedbackPercentage = () =>
    Math.round((state.good / countTotalFeedback()) * 100);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={handleClick}
        />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback!"></Notification>
      )}
    </div>
  );
};
