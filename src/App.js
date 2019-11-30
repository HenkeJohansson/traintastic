import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Button from "./elements/Button";

const theme = {
  background: "#151226",
  primary: "#BF307F",
  secondary: "#0388A6",
  thirduary: "#024873"
};

function signIn() {
  console.log("SIGN IN");
}

function logIn() {
  console.log("LOG IN");
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>TRAINTASTIC</h1>
        </header>
        <section>
          <input type="text" />
          <input type="password" />
          <br />
          <Button color="primary" onClick={logIn}>
            Log in
          </Button>
          <Button color="secondary" onClick={signIn}>
            Sign Up
          </Button>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
