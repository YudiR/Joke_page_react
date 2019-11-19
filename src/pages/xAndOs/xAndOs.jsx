import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import css from "./xAndOs.css";
import Button from "../../components/ui/button";
import { connect } from "react-redux";

class XandOs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneClicks: [],
      playerTwoClicks: [],
      whoseTurn: "playerOne",
      winnerIs: "",
      playersTurnName: this.props.playerOneName,
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

  onClick = number => {
    const one = [1, 2, 3];
    const two = [4, 5, 6];
    const three = [7, 8, 9];
    const four = [1, 4, 7];
    const five = [2, 5, 8];
    const six = [3, 9, 6];
    const seven = [1, 5, 9];
    const eight = [3, 5, 7];

    //   Setting players whose turn it is name.
    if (this.state.whoseTurn === "playerTwo") {
      this.setState({ playersTurnName: this.props.playerOneName });
    } else {
      this.setState({ playersTurnName: this.props.playerTwoName });
    }
    //
    // keeping track of the score and x and os shapes
    switch (this.state.whoseTurn) {
      case "playerOne":
        //shapes
        switch(number){
            case 1:
                this.setState({one: "x"})
            break
            case 2:
                this.setState({two: "x"})
            break

            case 3:
                this.setState({three: 'x'})
            break
            case 4:
                this.setState({four:"x "})
            break
            case 5:
                this.setState({five: "x"})
            break
            case 6:
                this.setState({six: "x"})
            break
            case 7:
                this.setState({seven: "x"})
            break
            case 8:
                this.setState({eight:"x"})
            break
            case 9:
                this.setState({nine: "x"})
            break
        }
        // 

        // score
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
            showWinnerAlert: true,
            playerOneClicks: [],
            playerTwoClicks: []
          });
        }
        this.setState({ whoseTurn: "playerTwo" });
        break;
      //
      case "playerTwo":
        const playerTwoDummyData = this.state.playerTwoClicks.concat(number);
        this.setState({ playerTwoClicks: playerTwoDummyData });
         //shapes
         switch(number){
            case 1:
                this.setState({one: "o"})
            break
            case 2:
                this.setState({two: "o"})
            break

            case 3:
                this.setState({three: 'o'})
            break
            case 4:
                this.setState({four:"o "})
            break
            case 5:
                this.setState({five: "o"})
            break
            case 6:
                this.setState({six: "o"})
            break
            case 7:
                this.setState({seven: "o"})
            break
            case 8:
                this.setState({eight:"o"})
            break
            case 9:
                this.setState({nine: "o"})
            break
        }
        // 

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
            showWinnerAlert: true,
            playerOneClicks: [],
            playerTwoClicks: []
          });
        }
        this.setState({ whoseTurn: "playerOne" });
        break;
      //
    }
  };

  render() {
    const winnerAlert = <h1>{this.state.winnerIs} Wins!</h1>;

    const playerOneButton = (
      <Button colour="primary">Player One has # wins</Button>
    );
    const playerTwoButton = (
      <Button colour="danger">Player two has # wins</Button>
    );
    const whoseTurn = (
      <Button colour="success">{this.state.playersTurnName + "'s Turn"}</Button>
    );

    return (
      <Container className="container">
        <Row className="justify-content-center ">
          <Col xs={"auto"}>{winnerAlert}</Col>
        </Row>
        <Row className="justify-content-between ">
          <Col xs={"auto"}>{playerOneButton}</Col>
          <Col xs={"auto"}>{whoseTurn}</Col>
          <Col xs={"auto"}>{playerTwoButton}</Col>
        </Row>
        <Row className="justify-content-center TopRow">
          <Col xs={2} className=" col">
            <div onClick={() => this.onClick(1)} className="Div">
              <h1 className="box">{this.state.one}</h1>
            </div>
          </Col>{" "}
          <Col onClick={() => this.onClick(2)} xs={2} className=" col">
            <div className="Div">
              <h1 className="box">{this.state.two}</h1>
            </div>
          </Col>{" "}
          <Col onClick={() => this.onClick(3)} xs={2} className=" col">
            <div className="Div">
              <h1 className="box">{this.state.three}</h1>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col onClick={() => this.onClick(4)} xs={2} className=" col">
            <div className="Div">
              <h1 className="box">{this.state.four}</h1>
            </div>
          </Col>{" "}
          <Col onClick={() => this.onClick(5)} xs={2} className=" col">
            <div className="Div">
              <h1 className="box">{this.state.five}</h1>
            </div>
          </Col>{" "}
          <Col onClick={() => this.onClick(6)} xs={2} className=" col">
            <div className="Div">
              <h1 className="box">{this.state.six}</h1>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col onClick={() => this.onClick(7)} xs={2} className=" col">
            <div className="Div">
              <h1 className="box">{this.state.seven}</h1>
            </div>
          </Col>{" "}
          <Col onClick={() => this.onClick(8)} xs={2} className=" col">
            <div className="Div">
              <h1 className="box">{this.state.eight}</h1>
            </div>
          </Col>{" "}
          <Col onClick={() => this.onClick(9)} xs={2} className=" col">
            <div className="Div">
              <h1 className="box">{this.state.nine}</h1>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    playerOneName: state.forms.playerOneName,
    playerTwoName: state.forms.playerTwoName
  };
};

export default connect(mapStateToProps)(XandOs);
