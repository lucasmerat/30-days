import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import {
  InstagramLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import { Col, Row, Container } from "../../../BootstrapComponents/Grid";
import API from "../../../../utils/API";
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("handling submit");
    API.loginUser(this.state)
    .then(res => {
       window.location.reload();
      })
      .catch(err => console.log(err));;
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
      <Container fluid>
        <Row classes="login-row">
          <Col size="md-4" />
          <Col classes="social-button-box" size="md-4">
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
