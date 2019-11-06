import React, { Component } from "react";
import ApiJokes from "../components/oneLinerApiJokes/apiJokes";
import Jokes from "../components/aQandOneLinerJokes/jokes";
import { Link } from "react-router-dom";
import YourJoke from "../components/personalJoke/yourjoke";
import { connect } from "react-redux";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("redux joke data", this.props.jokeData);
    if (this.props.jokeData[0]) {
      console.log("redux joke data", this.props.jokeData[0].question);
    }
    // console.log("redux joke data", this.props.jokeData[0].name);
    // console.log("redux joke data", this.props.jokeData[0].answer);
    return (
      <div>
        <h1>
          <Link to="/yourjoke">Make a Joke!</Link>
          {this.props.jokeData.legnth}
        </h1>
        {this.props.jokeData.length === 0 ? null : (
          <YourJoke
            answer={this.props.jokeData[0].answer}
            oneLiner={this.props.jokeData[0].oneLiner}
            question={this.props.jokeData[0].question}
          />
        )}
        <ApiJokes joke={this.props.apiJoke} />
        {/*  */}
        <Jokes
          answer={this.props.answerJoke}
          //
          question={this.props.questionJoke}
          //
          oneLiner={this.props.oneLinerJoke}
          //
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "redux state");
  return {
    isOneLiner: state.forms.playerOneName,
    jokeData: state.forms.jokes
  };
};

export default connect(
  mapStateToProps,
  null
)(MainPage);
