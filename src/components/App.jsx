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
      // console.log(prevState);
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  plusFeedBack = evt => {
    // console.log(evt);
    const option = evt.target.name;
    // console.log(option);
    this.plusFeedBackAll(option);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage(evt);
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  };

  countPositiveFeedbackPercentage = evt => {
    console.log(evt);
    this.setState(prevState => {
      const total = prevState.total;
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
          <FeedbackOptions
            options={this.plusFeedBack}
            onLeaveFeedback={this.plusFeedBack}
          ></FeedbackOptions>

          {this.state.total == null && (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
        {/* <Feedback state={this.state} plusFeedBack={this.plusFeedBack} /> */}
        {this.state.total >= 1 && (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.feedback}
            ></Statistics>
          </Section>
        )}
      </>
    );
  }
}

export default App;
