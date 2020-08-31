import React, { Component } from "react";
//import our service
import JeopardyService from "../jeopardyService/JeopardyService";
import Displayjeopardy from "../displayjeopardy/Displayjeopardy";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();

    this.state = {
      ans: "",
      data: {},
      score: 0,
      question: [],
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }

  //get a new random category from the API and add it to the data object in state

  get3Questions() {
    return this.client.get3Questions().then((result) => {
      this.setState({
        question: result.data,
      });
    });
  }
  //onclick user submit answer
  handleSubmit = (event) => {
    const answer1 = this.state.ans;
    const value1 = this.state.data.value;
    const pointValue = this.state.score;
    console.log("answer is", answer1);
    let score;
    if (answer1 === this.state.data.answer) {
      console.log(pointValue);
      console.log(value1);
      score = pointValue + value1;
      console.log(score);
    } else {
      score = pointValue - value1;
      console.log(score);
    }
    this.setState({
      score,
      ans: "",
    });

    this.getNewQuestion();
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ ans: event.target.value });
  };

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
    this.get3Questions();
  }
  //display the results on the screen
  render() {
    if (this.state.data.category === undefined) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    return (
      <div>
        <Displayjeopardy
          score={this.state.score}
          data1={this.state.data}
          ans={this.state.ans}
          question={this.state.questions}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default Jeopardy;
