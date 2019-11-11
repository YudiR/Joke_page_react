import React, { Component } from "react";
import ApiJokes from "../components/oneLinerApiJokes/apiJokes";
import Jokes from "../components/aQandOneLinerJokes/jokes";
import { Link } from "react-router-dom";
import YourJoke from "../components/personalJoke/yourjoke";
import { connect } from "react-redux";
import {Button  as BButton}  from 'react-bootstrap'

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.apiJoke !== this.props.apiJoke) {
      if (this.props.jokeData.length >= 1) {
        if (this.props.jokeData.length - 1 > this.state.index) {
          var dummyData = this.state.index;
          this.setState({ index: dummyData + 1 });
          console.log("if index state", this.state.index);
        } else {
          this.setState({ index: 0 });
        }
      }
    }
  }

  render() {
    return (
      <div>
       
        {this.props.jokeData.length === 0 ? null : (
          <YourJoke
            answer={this.props.jokeData[this.state.index].answer}
            oneLiner={this.props.jokeData[this.state.index].oneLiner}
            question={this.props.jokeData[this.state.index].question}
            name={this.props.jokeData[this.state.index].name}
          />
        )}
        <div className="yourJoke">
          <ApiJokes joke={this.props.apiJoke} />
        </div>

        <Jokes
          answer={this.props.answerJoke}
          question={this.props.questionJoke}
          oneLiner={this.props.oneLinerJoke}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOneLiner: state.forms.playerOneName,
    jokeData: state.forms.jokes
  };
};

export default connect(
  mapStateToProps,
  null
)(MainPage);
