import { Component } from 'react';
import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Section } from './section/section';
import { Notification } from './notification/notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  plusFeedBackAll = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  plusFeedBack = evt => {
    const option = evt.target.name;

    this.plusFeedBackAll(option);
    this.countPositiveFeedbackPercentage(evt);
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = evt => {
    this.setState(prevState => {
      const total = this.state.good + this.state.neutral + this.state.bad;
      const good = prevState.good;
      const percent = (good / total) * 100;
      return {
        feedback: percent.toFixed(0),
      };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.plusFeedBack}></FeedbackOptions>

          {this.countTotalFeedback() == null && (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>

        {this.countTotalFeedback() >= 1 && (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.state.feedback}
            ></Statistics>
          </Section>
        )}
      </>
    );
  }
}

export default App;
