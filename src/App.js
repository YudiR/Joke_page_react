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
import WelcomePage from './pages/welcomePage/welcomePage'
import Navbar from './components/navBar/navBar'
import { connect } from "react-redux";


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
        // console.log("Success:", data);
        this.setState({ apiJoke: data.value.joke });
      });
      var intervalId = setInterval(this.apiJoke, 3000);
    }
    
    apiJoke = props => {
      fetch(" http://api.icndb.com/jokes/random/", {
        method: "GET"
      })
      .then(e => e.json())
      .then(data => {
        // console.log("Success:", data);
        this.setState({ apiJoke: data.value.joke });
      });
      this.number = this.number + 1;
      if (this.number > 2) {
      this.number = 0;
    }
    // console.log(this.number);
  };
  
  render() {
    document.body.style.backgroundColor = "aqua";

    
    return (
      <div className='app'>
        
        <Router>
<Navbar/>
          <Switch>
            <Route
              path="/mainPage"
              exact
              render={props => ( 
                this.props.namesSubmitted ?
                <MainPage
                apiJoke={this.state.apiJoke}
                  answerJoke={this.state.jokes[this.number].a}
                  questionJoke={this.state.jokes[this.number].q}
                  oneLinerJoke={this.state.jokes[this.number].oneLiner}
                /> :  <WelcomePage/>

              )}
            />
            />
            <Route
              path="/yourjoke"
              exact
              render={props => ( 
                this.props.namesSubmitted ?
                <FormPage     />:
                <WelcomePage/>
              )}
            />
            <Route path="/" exact render={props => <WelcomePage/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    namesSubmitted: state.forms.namesSubmitted
  }
}

export default connect(mapStateToProps)(App);
