import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApiJokes from "./components/apiJokes";
import Jokes from "./components/jokes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "yudi",
      apiJoke: "",
      jokes: [
        {
          q: "what did the buddhist ask the hot dog vendor?",
          a: "make me one with everything"
        },
        { q: " What do you call bears with no ears?", a: "B" },
        {
          oneLiner:
            "A perfectionist walked into a bar…apparently, the bar wasn’t set high enough."
        }
      ]
    };
    this.number = 0;
  }

  componentDidMount() {
    fetch(" http://api.icndb.com/jokes/random/", {
      method: "GET"
    })
      .then(e => e.json())
      .then(data => {
        console.log("Success:", data);
        this.setState({ apiJoke: data.value.joke });
      });
    var intervalId = setInterval(this.apiJoke, 9000);
  }

  apiJoke = props => {
    fetch(" http://api.icndb.com/jokes/random/", {
      method: "GET"
    })
      .then(e => e.json())
      .then(data => {
        console.log("Success:", data);
        this.setState({ apiJoke: data.value.joke });
      });
    this.number = this.number + 1;
    if (this.number > 2) {
      this.number = 0;
    }
    console.log(this.number);
  };

  render() {
    console.log("props!!!", this.props);
    return (
      <div style={{ }}>
        <ApiJokes joke={this.state.apiJoke} />
        <Jokes
          answer={this.state.jokes[this.number].a}
          question={this.state.jokes[this.number].q}
          oneLiner={this.state.jokes[this.number].oneLiner}
        />
      </div>
    );
  }
}

export default App;
