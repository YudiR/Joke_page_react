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
      isOneLiner: false,
      name: "",
      oneLiner: "",
      question: "",
      answer: "",
      name: "",
      alertName: "",
      colour: "danger",
      submitClicked: false,
      submitAlertColour: "red",
      playersColour: "",
      formValidation: { valid: false },
      invalidSubmitClicked: false
    };
  }

  componentDidMount() {
    if (this.props.isOnePlayer) {
      this.setState({ name: this.props.playerOne, showForm: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // form validations
    if (
      prevState.oneLiner !== this.state.oneLiner ||
      prevState.question !== this.state.question ||
      prevState.answer !== this.state.answer ||
      prevState.isOneLiner !== this.state.isOneLiner ||
      prevState.submitClicked !== this.state.submitClicked
    ) {
      var formValidationCopy = this.state.formValidation;
      formValidationCopy.valid = false;
      // one liner
      if (this.state.isOneLiner && this.state.oneLiner.length > 6) {
        formValidationCopy.valid = true;
      }
      // answer and question
      else if (
        this.state.isOneLiner === false &&
        this.state.answer.length > 2 &&
        this.state.question.length > 2
      ) {
        console.log("passed answer and question condintions");
        formValidationCopy.valid = true;
      }
      this.setState({ formValidation: formValidationCopy });
    }
    //
  }

  isValid = () => {
    if (this.state.isOneLiner && this.state.oneLiner.length > 5) {
    }
  };

  change = event => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked,invalidSubmitClicked:false })
      : this.setState({ [name]: value });
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

    // setting submitClicked to determine to show submit alert
    this.setState({ submitClicked: true });

    clearTimeout(this.cancelSubmitClicked);
    this.cancelSubmitClicked = setTimeout(() => {
      this.setState({ submitClicked: false });
      console.log("canceled submitClicked!!!");
    }, 2500);
    //

    // finding amount of jokes submitted by user
    const playersJokes = this.props.jokes.filter(
      joke => joke.name === this.state.name
    );

    if (this.state.name !== "") {
      this.setState({ playersJokes: playersJokes.length + 1 });
    }

    // name for alert. setting state here so the name will only change on submit
    this.setState({ alertName: this.state.name });

    // clearing inputs on submit by clearing state
    this.state.isOneLiner
      ? this.setState({ oneLiner: "" })
      : this.setState({ answer: "", question: "" });
    // 
    // clearing invalid submit warning on valid submit
      this.setState({invalidSubmitClicked: false})
    // 
  };

  clicked = (name, player) => {
    this.setState({ name: name });

    // seleceted players name display colour
    if (player === "playerOne") {
      this.setState({ playersColour: "blue" });
    } else {
      this.setState({ playersColour: "red" });
    }
  }

  render() {
    // css style for form on invalid submit
    let colourInvalidSubmit;
    colourInvalidSubmit =
      this.state.formValidation.valid === false &&
      this.state.invalidSubmitClicked
        ? { border: "2px solid red" }
        : null
    
    
    // 
    const jokeForm = (
      <Form>
        <div className="CheckBoxAndSubmit">
          <Form.Group id="formGridCheckbox">
            <Form.Check
              value={this.state.isOneLiner}
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
              value={this.state.oneLiner}
              // type="email"
              style= {colourInvalidSubmit}
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
                style= {colourInvalidSubmit}
                value={this.state.question}
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
                value={this.state.answer}
                style= {colourInvalidSubmit}
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
          {this.state.formValidation.valid === false ? (
            <Button
              onClick={() => {
                this.setState({ invalidSubmitClicked: true });
              }}
              variant={"success"}
            >
              Enter a Joke And Submit it!!!
            </Button>
          ) : (
            <Button onClick={this.submit} variant={this.state.colour}>
              SUBMIT YOUR JOKE
            </Button>
          )}
        </div>
      </Form>
    );

    const whichPlayer = (
      <div className="WhoseJoke">
        {" "}
        <CButton
          click={() => this.clicked(this.props.playerOne, "playerOne")}
          class="WelcomeButton"
        >
          {this.props.playerOne}
        </CButton>
        {this.props.isOnePlayer ? null : (
          <CButton
            click={() => this.clicked(this.props.playerTwo, "playerTwo")}
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
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          color: this.state.playersColour
        }}
      >
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
    );

    if (this.state.name !== "") {
      jokeSubmitted = (
        <h3
          style={{
            color: this.state.submitAlertColour,
            display: "flex",
            justifyContent: "center"
          }}
        >
          {this.state.alertName + "'s"}{" "}
          {this.state.playersJokes > 3 ? this.state.playersJokes + "th" : null}
          {this.state.playersJokes === 1
            ? this.state.playersJokes + "st"
            : null}
          {this.state.playersJokes === 2
            ? this.state.playersJokes + "nd"
            : null}
          {this.state.playersJokes === 3
            ? this.state.playersJokes + "rd"
            : null}{" "}
          Joke Submitted!
        </h3>
      );
    }
  
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
