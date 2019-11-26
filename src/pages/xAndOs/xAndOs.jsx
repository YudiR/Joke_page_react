import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import css from "./xAndOs.css";
import Button from "../../components/ui/button";
import { connect } from "react-redux";
import * as action from '../../store/actions/xAndOs'

export class XandOs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneClicks: [],
      playerTwoClicks: [],
      whoseTurn: "playerOne",
      winnerIs: "",
      playersTurnName: this.props.playerOneName,
      hideGame: false,
      one: "?",
      two: "?",
      three: "?",
      four: "?",
      five: "?",
      six: "?",
      seven: "?",
      eight: "?",
      nine: "?"
    };
  }


  componentDidUpdate (prevState,prevProps) {
    if(this.state.playerOneClicks.length + this.state.playerTwoClicks === 9){
    console.log('player one and two',prevState.playerOneWins === this.props.playerOneWins && prevState.playerTwoWins === this.props.playerTwoWins )
    // console.log('player Two',prevState.playerTwoWins === this.props.playerTwoWins )
}
  }

 
  onClick = number => {
    const one = [1, 2, 3];
    const two = [4, 5, 6];
    const three = [7, 8, 9];
    const four = [1, 4, 7];
    const five = [2, 5, 8];
    const six = [3, 9, 6];
    const seven = [1, 5, 9];
    const eight = [3, 5, 7];
    // if (
    //   this.state.playerOneClicks.includes(number) ||
    //   this.state.playerOneClicks.includes(number)
    // ) {
    //   return alert("this square was already clicked");
    // }

    if (this.state.whoseTurn === "playerTwo") {
      this.setState({ playersTurnName: this.props.playerOneName });
    } else {
      this.setState({ playersTurnName: this.props.playerTwoName });
    }

    switch (this.state.whoseTurn) {
      case "playerOne":
        switch (number) {
          case 1:
            this.setState({ one: "x" });
            break;
          case 2:
            this.setState({ two: "x" });
            break;

          case 3:
            this.setState({ three: "x" });
            break;
          case 4:
            this.setState({ four: "x" });
            break;
          case 5:
            this.setState({ five: "x" });
            break;
          case 6:
            this.setState({ six: "x" });
            break;
          case 7:
            this.setState({ seven: "x" });
            break;
          case 8:
            this.setState({ eight: "x" });
            break;
          case 9:
            this.setState({ nine: "x" });
            break;
        }

        const playerOneDummyData = this.state.playerOneClicks.concat(number);
        console.log("dummy data", playerOneDummyData);
        this.setState({ playerOneClicks: playerOneDummyData });

        if (
          one.every(i => playerOneDummyData.includes(i)) ||
          two.every(i => playerOneDummyData.includes(i)) ||
          three.every(i => playerOneDummyData.includes(i)) ||
          four.every(i => playerOneDummyData.includes(i)) ||
          five.every(i => playerOneDummyData.includes(i)) ||
          six.every(i => playerOneDummyData.includes(i)) ||
          seven.every(i => playerOneDummyData.includes(i)) ||
          eight.every(i => playerOneDummyData.includes(i))
        ) {
          this.setState({
            winnerIs: this.props.playerOneName,
            hideGame: true,
            playerOneClicks: [],
            playerTwoClicks: [],
            one: "?",
            two: "?",
            three: "?",
            four: "?",
            five: "?",
            six: "?",
            seven: "?",
            eight: "?",
            nine: "?"
          });

          this.props.onPlayerOneWins()

          
        }
        setTimeout(() => {
          this.setState({ hideGame: false });
        }, 4000);
        this.setState({ whoseTurn: "playerTwo" });
        break;
      case "playerTwo":
        const playerTwoDummyData = this.state.playerTwoClicks.concat(number);
        this.setState({ playerTwoClicks: playerTwoDummyData });
        console.log("dummy data player two", playerTwoDummyData);

        switch (number) {
          case 1:
            this.setState({ one: "o" });
            break;
          case 2:
            this.setState({ two: "o" });
            break;

          case 3:
            this.setState({ three: "o" });
            break;
          case 4:
            this.setState({ four: "o" });
            break;
          case 5:
            this.setState({ five: "o" });
            break;
          case 6:
            this.setState({ six: "o" });
            break;
          case 7:
            this.setState({ seven: "o" });
            break;
          case 8:
            this.setState({ eight: "o" });
            break;
          case 9:
            this.setState({ nine: "o" });
            break;
        }

        if (
          one.every(i => playerTwoDummyData.includes(i)) ||
          two.every(i => playerTwoDummyData.includes(i)) ||
          three.every(i => playerTwoDummyData.includes(i)) ||
          four.every(i => playerTwoDummyData.includes(i)) ||
          five.every(i => playerTwoDummyData.includes(i)) ||
          six.every(i => playerTwoDummyData.includes(i)) ||
          seven.every(i => playerTwoDummyData.includes(i)) ||
          eight.every(i => playerTwoDummyData.includes(i))
        ) {
          this.setState({
            winnerIs: this.props.playerTwoName,
            hideGame: true,
            playerOneClicks: [],
            playerTwoClicks: [],
            one: "?",
            two: "?",
            three: "?",
            four: "?",
            five: "?",
            six: "?",
            seven: "?",
            eight: "?",
            nine: "?"
          });

          this.props.onPlayerTwoWins()

          setTimeout(() => {
            this.setState({ hideGame: false });
          }, 4000);
        }
        this.setState({ whoseTurn: "playerOne" });
        break;
    }
    if (
      this.state.playerOneClicks.length + this.state.playerTwoClicks.length ===
      8
    ) {
      console.log('inside cat game if condition!!')
      this.setState( prevState => ({
        playerOneClicks: [],
        playerTwoClicks: [],
        catsGame:
        prevState.playerOneWins === this.props.playerOneWins &&
        prevState.playerTwoWins === this.props.playerTwoWins ,
        hideGame: true,
        one: "?",
        two: "?",
        three: "?",
        four: "?",
        five: "?",
        six: "?",
        seven: "?",
        eight: "?",
        nine: "?"
      }));

      this.setState({});
      setTimeout(() => {
        this.setState({ hideGame: false, catsGame: false });
      }, 4000);
    }
  };

  render() {
    let endOfGameAlert = (
      <h1 className="endOfGameAlert">{this.state.winnerIs} Wins!</h1>
    );
    if (this.state.catsGame) {
      endOfGameAlert = <h1 className="endOfGameAlert">Cats Game!</h1>;
    }

    const playerOneButton = (
      <Button testid="playerOnesWinsButton" colour="primary">
        Player One has {this.props.playerOneWins} wins
      </Button>
    );
    const playerTwoButton = (
      <Button colour="danger">
        Player two has {this.props.playerTwoWins} wins
      </Button>
    );
    const whoseTurn = (
      <Button testid="WhoseTurnButton" colour="success">
        {this.state.playersTurnName + "'s Turn"}
      </Button>
    );

    const shapeBlueBackground = { backgroundColor: "blue" };

    const shapeRedBackground = { backgroundColor: "red" };

    return (
      <Container className="container">
        <Row className="justify-content-between  ">
          <Col xs={"auto"}>{playerOneButton}</Col>
          <Col xs={"auto"}>{whoseTurn}</Col>
          <Col xs={"auto"}>{playerTwoButton}</Col>
        </Row>
        {this.state.hideGame && (
          <Row className="justify-content-center align-items-center ">
            <Col xs={"auto"}>{endOfGameAlert}</Col>
          </Row>
        )}
        {!this.state.hideGame && (
          <React.Fragment>
            <Row className="justify-content-center TopRow">
              <Col
                style={
                  this.state.one === "x"
                    ? shapeBlueBackground
                    : this.state.one === "o"
                    ? shapeRedBackground
                    : null
                }
                xs={2}
                className="col"
              >
                <div
                  testid="DivOne"
                  onClick={() =>
                    this.state.one === "?"
                      ? this.onClick(1)
                      : alert("This Square Has Already Been Selected! ")
                  }
                  className="Div"
                >
                  <h1 testid="HOne" className="box">
                    {this.state.one}
                  </h1>
                </div>
              </Col>{" "}
              <Col
                style={
                  this.state.two === "x"
                    ? shapeBlueBackground
                    : this.state.two === "o"
                    ? shapeRedBackground
                    : null
                }
                testid="DivTwo"
                onClick={() =>
                  this.state.two === "?"
                    ? this.onClick(2)
                    : alert("This Square Has Already Been Selected! ")
                }
                xs={2}
                className=" col"
              >
                <div className="Div">
                  <h1 testid="HTwo" className="box">
                    {this.state.two}
                  </h1>
                </div>
              </Col>{" "}
              <Col
                style={
                  this.state.three === "x"
                    ? shapeBlueBackground
                    : this.state.three === "o"
                    ? shapeRedBackground
                    : null
                }
                testid="DivThree"
                onClick={() =>
                  this.state.three === "?"
                    ? this.onClick(3)
                    : alert("This Square Has Already Been Selected! ")
                }
                xs={2}
                className=" col"
              >
                <div className="Div">
                  <h1 testid="HThree" className="box">
                    {this.state.three}
                  </h1>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col
                style={
                  this.state.four === "x"
                    ? shapeBlueBackground
                    : this.state.four === "o"
                    ? shapeRedBackground
                    : null
                }
                testid="DivFour"
                onClick={() =>
                  this.state.four === "?"
                    ? this.onClick(4)
                    : alert("This Square Has Already Been Selected! ")
                }
                xs={2}
                className=" col"
              >
                <div className="Div">
                  <h1 testid="HFour" className="box">
                    {this.state.four}
                  </h1>
                </div>
              </Col>{" "}
              <Col
                style={
                  this.state.five === "x"
                    ? shapeBlueBackground
                    : this.state.five === "o"
                    ? shapeRedBackground
                    : null
                }
                testid="DivFive"
                onClick={() =>
                  this.state.five === "?"
                    ? this.onClick(5)
                    : alert("This Square Has Already Been Selected! ")
                }
                xs={2}
                className=" col"
              >
                <div className="Div">
                  <h1 testid="HFive" className="box">
                    {this.state.five}
                  </h1>
                </div>
              </Col>{" "}
              <Col
                style={
                  this.state.six === "x"
                    ? shapeBlueBackground
                    : this.state.six === "o"
                    ? shapeRedBackground
                    : null
                }
                testid="DivSix"
                onClick={() =>
                  this.state.six === "?"
                    ? this.onClick(6)
                    : alert("This Square Has Already Been Selected! ")
                }
                xs={2}
                className=" col"
              >
                <div className="Div">
                  <h1 className="box">{this.state.six}</h1>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col
                style={
                  this.state.seven === "x"
                    ? shapeBlueBackground
                    : this.state.seven === "o"
                    ? shapeRedBackground
                    : null
                }
                onClick={() =>
                  this.state.seven === "?"
                    ? this.onClick(7)
                    : alert("This Square Has Already Been Selected! ")
                }
                xs={2}
                className=" col"
              >
                <div style={{ pointerEvents: "none" }} className="Div">
                  <h1 className="box">{this.state.seven}</h1>
                </div>
              </Col>{" "}
              <Col
                style={
                  this.state.eight === "x"
                    ? shapeBlueBackground
                    : this.state.eight === "o"
                    ? shapeRedBackground
                    : null
                }
                onClick={() =>
                  this.state.eight === "?"
                    ? this.onClick(8)
                    : alert("This Square Has Already Been Selected! ")
                }
                xs={2}
                className=" col"
              >
                <div className="Div">
                  <h1 className="box">{this.state.eight}</h1>
                </div>
              </Col>{" "}
              <Col
                style={
                  this.state.nine === "x"
                    ? shapeBlueBackground
                    : this.state.nine === "o"
                    ? shapeRedBackground
                    : null
                }
                onClick={() =>
                  this.state.nine === "?"
                    ? this.onClick(9)
                    : alert("This Square Has Already Been Selected! ")
                }
                xs={2}
                className=" col"
              >
                <div className="Div">
                  <h1 className="box">{this.state.nine}</h1>
                </div>
              </Col>
            </Row>
          </React.Fragment>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    playerOneName: state.forms.playerOneName,
    playerTwoName: state.forms.playerTwoName,
    playerOneWins: state.xAndOs.playerOneWins,
    playerTwoWins: state.xAndOs.playerTwoWins,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPlayerOneWins: () => {
      dispatch(action.playerOneWins());
    },
    onPlayerTwoWins: () => {
      dispatch(action.playerTwoWins())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XandOs);
