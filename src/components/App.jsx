import { Component } from 'react';
import { Statistics } from './FeedbackStatistics/FeedbackStatistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification /Notification';
import { FeedbackWrap } from './Feedback/Feedback.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (name) => {
    this.setState((prevState) => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() === 0) {
      return 0
    }
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
  }

  render() {
    return (
      <FeedbackWrap>
        <Section title={'Please leave a feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          ></FeedbackOptions>
        </Section>
        {this.countTotalFeedback() !== 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </FeedbackWrap>
    );
  }
};