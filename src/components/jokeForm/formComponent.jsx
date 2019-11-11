import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CButton from "../ui/button";
import * as action from "../../store/actions/forms"


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
      name: ''
    };
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
  };

  link = () =>{
    console.log('hey')
  }

  clicked =(name) => {
    // console.log('clicked')
    this.setState({showForm: true, name: name})
  }

  render() {
    const jokeForm = (
      <Form>
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
              <Form.Label></Form.Label>
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
                name="answer"
                rows="3"
                onChange={event => {
                  this.change(event);
                }}
              />
            </Form.Group>
          </React.Fragment>
        )}

        <Button onClick={this.submit} variant="danger">
          SUBMIT YOUR JOKE
        </Button>
      </Form>
    );

    const whichPlayer = (
      <React.Fragment>
        {" "}
        <CButton click={()=> this.clicked(this.props.playerOne)}class="WelcomeButton">{this.props.playerOne}</CButton>
        <CButton click={()=> this.clicked(this.props.playerTwo)}colour='danger' class="WelcomeButton">{this.props.playerTwo}</CButton>
      </React.Fragment>
    );

    return (
      <div style={{ padding: "60 0", paddingTop: "100px" }}>
        
        {this.state.showForm === false && whichPlayer}
        {this.state.showForm && jokeForm}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jokes: state.forms.jokes,
    playerOne: state.forms.playerOneName,
    playerTwo: state.forms.playerTwoName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFormJokeSubmit: joke => dispatch({ type: "SUBMIT_JOKE_FORM", joke: joke }),
    onLink:() => {dispatch (action.linkFromForm())}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms);
