import React, { Component } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Button from "./elements/Button";
import fire from "./configs/firebase";

import LogIn from "./containers/LogIn";
import Home from "./containers/Home";

const theme = {
  background: "#151226",
  primary: "#BF307F",
  secondary: "#0388A6",
  thirduary: "#024873"
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log("user", user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <h1>TRAINTASTIC</h1>
          </header>
          {this.state.user ? <Home /> : <LogIn />}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
