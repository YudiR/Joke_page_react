import React, { Component } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CButton from "../ui/button";
import css from "./formComponent.css";
import * as action from "../../store/actions/forms";

export class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOneLiner: null,
      name: "",
      oneLiner: "",
      question: "",
      answer: "",
      showForm: false,
      name: "",
      alertName: "",
      colour: "danger",
      submitClicked: false,
      submitAlertColour: "red",
    };
  }
  
  componentDidMount() {
    if (this.props.isOnePlayer) {
      this.setState({ name: this.props.playerOne, showForm: true });
    }
  }

  change = event => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
    // console.log(
    //   "name!!!!",
    //   name,
    //   "value!",
    //   value,
    //   checked,
    //   type,
    //   event.target.value
    // );
    // console.log(this.state.isOneLiner);
  };

  submit = () => {
    const jokeData = {
      isOneLiner: this.state.isOneLiner,
      oneLiner: this.state.oneLiner,
      question: this.state.question,
      answer: this.state.answer,
      name: this.state.name
    };

    this.props.onFormJokeSubmit(jokeData);

    // submit buttons colour
    this.state.colour === "danger"
      ? this.setState({ colour: "primary" })
      : this.setState({ colour: "danger" });

    // submit alert colour
    this.state.submitAlertColour === "red"
      ? this.setState({ submitAlertColour: "blue" })
      : this.setState({ submitAlertColour: "red" });

    this.setState({ submitClicked: true });

    setTimeout(() => {
      this.setState({ submitClicked: false });
    }, 2500);

    // finding amount of jokes submitted by user
    const playersJokes = this.props.jokes.filter(
      joke => joke.name === this.state.name
    );

    if (this.state.name !== "") {
      this.setState({ playersJokes: playersJokes.length + 1 });
    }

    // name for alert. setting state here so the name will only change on submit
    this.setState({alertName: this.state.name})
  };

  clicked = name => {
    // console.log('clicked')
    this.setState({ showForm: true, name: name });
  };

  render() {
    const jokeForm = (
      <Form>
        <div className="CheckBoxAndSubmit">
          <Form.Group id="formGridCheckbox">
            <Form.Check
              // value={isOneLiner}
              name="isOneLiner"
              type="checkbox"
              label="One Liner"
              onChange={event => {
                this.change(event);
              }}
            />
          </Form.Group>
        </div>
        {this.state.isOneLiner === true ? (
          <Form.Group testid="oneLiner" controlId="exampleForm.ControlInput2">
            <Form.Label></Form.Label>
            <Form.Control
              // value={oneLiner}
              // type="email"
              name="oneLiner"
              placeholder="One Liner"
              onChange={event => {
                this.change(event);
              }}
            />
          </Form.Group>
        ) : null}
        {this.state.isOneLiner === true ? null : (
          <React.Fragment>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Question</Form.Label>
              <Form.Control
                // value={email}
                // type="email"
                name="question"
                placeholder="Question"
                onChange={event => {
                  this.change(event);
                }}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Answer</Form.Label>
              <Form.Control
                // value={answer}
                as="textarea"
                placeholder="Answer"
                name="answer"
                rows="3"
                onChange={event => {
                  this.change(event);
                }}
              />
            </Form.Group>
          </React.Fragment>
        )}
        <div className="CheckBoxAndSubmit">
          <Button onClick={this.submit} variant={this.state.colour}>
            SUBMIT YOUR JOKE
          </Button>
        </div>
      </Form>
    );

    const whichPlayer = (
      <div className="WhoseJoke">
        {" "}
        <CButton
          click={() => this.clicked(this.props.playerOne)}
          class="WelcomeButton"
        >
          {this.props.playerOne}
        </CButton>
        {this.props.isOnePlayer ? null : (
          <CButton
            click={() => this.clicked(this.props.playerTwo)}
            colour="danger"
            class="WelcomeButton"
          >
            {this.props.playerTwo}
          </CButton>
        )}
      </div>
    );

    // Player seleceted displayed at top of page
    const selectedPlayer = (
      <h3 style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        {this.state.name}
      </h3>
    );
    // Joke submitted alert. Top of page
    let jokeSubmitted = (
      <h3
        style={{
          color: this.state.submitAlertColour,
          display: "flex",
          justifyContent: "center"
        }}
      >
      
        Joke Submitted!
      </h3>

    )

    if (this.state.name !== "" ) {jokeSubmitted = (
      <h3
        style={{
          color: this.state.submitAlertColour,
          display: "flex",
            justifyContent: "center"
        }}
      >
        {this.state.Alertname + "'s"}{" "}
        {this.state.playersJokes > 8 
          ? this.state.playersJokes + "th"
          : this.state.playersJokes + "st"}{" "}
        Joke Submitted!
      </h3>

    ); } 
    return (
      <div style={{ margin: "10vh" }}>
        {selectedPlayer}
        {this.state.submitClicked && jokeSubmitted}
        {this.props.isOnePlayer === false && whichPlayer}
        {jokeForm}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOnePlayer: state.forms.isOnePlayer,
    jokes: state.forms.jokes,
    playerOne: state.forms.playerOneName,
    playerTwo: state.forms.playerTwoName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFormJokeSubmit: joke => dispatch({ type: "SUBMIT_JOKE_FORM", joke: joke })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
