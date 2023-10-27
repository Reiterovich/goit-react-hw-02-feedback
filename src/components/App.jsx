import { Component } from 'react';
import { Feedback } from './feedback/feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // good = this.state.good;
  // neutral = this.state.neutral;
  // bad = this.state.bad;

  plusFeedBackAll = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  plusFeedBack = evt => {
    console.log(evt);
    const option = evt.target.name;
    console.log(option);
    this.plusFeedBackAll(option);
  };

  render() {
    return (
      <>
        <Feedback state={this.state} plusFeedBack={this.plusFeedBack} />
      </>
    );
  }
}

export default App;
