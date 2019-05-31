import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import {
  InstagramLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import API from "../../../utils/API";
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errorMessage: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newUser = {...this.state};
    newUser.username = newUser.username.toLowerCase();
    API.loginUser(newUser)
      .then(res => {
        if (!res.data.success) {
          this.setState({
            errorMessage: res.data.message
          });
        } else {
          window.location.reload();
        }
      })
      .catch(err => console.log(err));
  };
  render() {
    let instaLink;
    let googleLink;
    if (process.env.NODE_ENV === "production") {
      instaLink = "/api/login";
      googleLink = "/api/auth/google";
    } else {
      instaLink = "http://localhost:5000/api/login";
      googleLink = "http://localhost:5000/api/auth/google";
    }
    return this.props.readCookie() ? (
      <Redirect to="/profile/browse" />
    ) : (
      <div className="container-fluid" >
        <div className="row login-row">
          <div className="col-md-4"  />
          <div className="col-md-4 social-button-box">
            <a className="social-button" href={instaLink}>
              <InstagramLoginButton />
            </a>
            <a className="social-button" href={googleLink}>
              <GoogleLoginButton />
            </a>
            <h3 className="text-center mt-3">OR</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="sign-in-box">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                  className="login-input"
                  required
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  className="login-input"
                  required
                />
                <div className="error-message">{this.state.errorMessage.length > 0 && <p>{this.state.errorMessage}</p>}</div>
                <div className="button-box">
                  <button type="submit" className="btn btn-warning my-3">
                    Login
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center my-0">
              Don't have an account?{" "}
              <Link className="signup-btn" to="/signup">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
