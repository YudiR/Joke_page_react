import React, { Component } from "react";
import Button from "../../components/ui/button";
import { InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "../../store/actions/forms";
import css from "./welcomePage.css";
import { withRouter } from "react-router-dom";

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      isTwoPlayers: false,
      playerOnesName: "",
      playerTwosName: ""
    };
  }

  numberOfPlayers = amountOfPlayers => {
    switch (amountOfPlayers) {
      case "onePlayer":
        this.setState({ showInput: true });
        break;
      case "twoPlayers":
        this.setState({ isTwoPlayers: true, showInput: true });
        break;
    }
  };

  onChange = event => {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = () => {
    var playerOne = this.state.playerOnesName;
    var playerTwo = this.state.playerTwosName;
    console.log("player two", this.state.playerTwosName);
    if (playerTwo === "") {
      playerTwo = 'Player Two';
    }
    if (playerOne === "") {
      playerOne = 'Player One';
    }
    this.props.onNameSubmit(playerOne, playerTwo);
  this.props.fromForm ? this.props.history.push('/yourJoke') : this.props.history.push('/mainPage')   
  };

  render() {
    const buttons = (
      <React.Fragment>
        {" "}
        <Button
          class="WelcomeButton"
          click={() => this.numberOfPlayers("onePlayer")}
          colour="primary"
        >
          One Player!
        </Button>
        <Button
          class="WelcomeButton"
          click={() => this.numberOfPlayers("twoPlayers")}
          colour="danger"
        >
          Two Players!!
        </Button>
      </React.Fragment>
    );

    const input = (
      <React.Fragment>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text className="InputTitle" id="basic-addon1">
              Player One!
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            className="NameInputOne"
            placeholder="Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="playerOnesName"
            onChange={event => {
              this.onChange(event);
            }}
          />
        </InputGroup>
        {this.state.isTwoPlayers && (
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text className="InputTitle" id="basic-addon1">
                Player Two!!
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className="NameInputTwo"
              placeholder="Name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="playerTwosName"
              onChange={event => {
                this.onChange(event);
              }}
            />
          </InputGroup>
        )}
      </React.Fragment>
    );
    var submitButton = (
      <Button
        click={() => this.onSubmit()}
        class="SubmitButton"
        colour="success"
      >
        Submit Names
      </Button>
    );

    return (
      <div className="WelcomePage">
        {this.state.showInput && input}
        {this.state.showInput === false && buttons}
        {this.state.showInput && submitButton}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNameSubmit: (one, two) => {
      dispatch(action.playersNames(one, two));
    }
  };
};

const mapStateToProps = (state) => {
  return {
fromForm: state.forms.linkFromForm
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WelcomePage)
);
