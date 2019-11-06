import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOneLiner: null,
      name: "",
      oneLiner: "",
      question: "",
      answer: ""
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
      name: this.state.name,
      oneLiner: this.state.oneLiner,
      question: this.state.question,
      answer: this.state.answer
    };

    this.props.onFormJokeSubmit(jokeData);
  };

  render() {

    return (
      <div style={{ padding: "60 0", paddingTop: "100px" }}>
        <h1>
          {" "}
          <Link to="/">Home</Link>
        </h1>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Type Your Name!!</Form.Label>

            <Form.Label></Form.Label>
            <Form.Control
              // value={name}
              type="name"
              name="name"
              placeholder="Your Name"
              onChange={event => {
                this.change(event);
              }}
            />
          </Form.Group>

          {/* <Form.Group controlId="formGridState">
          <Form.Label>Pick your joke category!</Form.Label>
          <Form.Control
          // value={category}
            as="select"
            onChange={event => {
              this.change(event);
            }}
            name="category"
          >
            <option value="blue">Funny</option>
            <option value="green">Lame</option>
            <option value="red">SO SO</option>
            <option value="orange">LOL</option>
            <option value="yellow">Surprising</option>
          </Form.Control>
        </Form.Group> */}

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
            <Form.Group controlId="exampleForm.ControlInput1">
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jokes: state.forms.jokes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFormJokeSubmit: joke => dispatch({ type: "SUBMIT_JOKE_FORM", joke: joke })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms);
