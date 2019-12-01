import React, { Component } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import fire from "../configs/firebase";

class LogIn extends Component {
  constructor() {
    super();
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: "",
      password: ""
    };
  }

  signUp() {}

  logIn() {
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .then(u => {})
      .catch(err => {});
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <section>
        <h1>Log in</h1>
        <Input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          primaryColor="primary"
          secondaryColor="secondary"
        />
        <Input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          primaryColor="primary"
          secondaryColor="secondary"
        />
        <br />
        <Button color="primary" onClick={this.logIn}>
          Log in
        </Button>
        <Button color="secondary" onClick={this.signIn}>
          Sign Up
        </Button>
      </section>
    );
  }
}

export default LogIn;
