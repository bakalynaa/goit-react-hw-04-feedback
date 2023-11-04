import Statistics from './Statistics';
import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = el => {
    return this.setState(prev => ({ [el]: prev[el] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.floor((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys(this.state)}
                           onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title='Statistics'>
          {this.countTotalFeedback() === 0
            ? <Notification message={'There is no feedback'}/>
            : <Statistics good={good}
                      neutral={neutral}
                      bad={bad}
                      total={this.countTotalFeedback()}
                      positivePercentage={this.countPositiveFeedbackPercentage()} />}
        </Section>
      </>
    );
  }
}
