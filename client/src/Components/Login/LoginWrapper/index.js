import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class LoginWrapper extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleClick = () =>{
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <TextField
          id="email"
          label="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <TextField
          id="password"
          label="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default LoginWrapper;
