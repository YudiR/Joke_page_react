import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/mainPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import FormPage from "./pages/formPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ],
      urQuestion: "",
      urAnswer: "",
      urOneLiner: "",
      urName: "",
      urIsOneLiner: "",
      urCategory: ""
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

  change = event => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
    console.log("namenamenamename", this.state.name);
  };
  render() {
    return (
      <div style={{}}>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <MainPage
                  apiJoke={this.state.apiJoke}
                  answerJoke={this.state.jokes[this.number].a}
                  questionJoke={this.state.jokes[this.number].q}
                  oneLinerJoke={this.state.jokes[this.number].oneLiner}
                />
              )}
            />
            />
            <Route
              path="/yourjoke"
              exact
              render={props => (
                <FormPage
                  change={this.change}
                  answer={this.state.UrAnswer}
                  name={this.state.urName}
                  category={this.state.urCategory}
                  isOneLiner={this.state.urIsOneLiner}
                  question={this.state.Urquestion}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
