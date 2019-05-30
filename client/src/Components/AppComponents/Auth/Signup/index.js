import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../../BootstrapComponents/Grid";
import API from "../../../../utils/API";
import "./Signup.css";

export default class Signup extends Component {
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
    API.signupUser(this.state);
  };
  render() {
    return (
      <div>
        <Container fluid>
          <Row classes="login-row">
            <Col size="md-4" />
            <Col classes="social-button-box" size="md-4">
              <form onSubmit={this.handleSubmit}>
                <div className="signup-box">
                  <h3 className="text-center">Create an account</h3>
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                    className="signup-input"
                    required
                  />
                  <label>Password</label>
                  <input
                    type="text"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    className="signup-input"
                    required
                  />
                  <div className="signup-button-box">
                    <button type="submit" className="btn btn-warning my-3">
                      Signup
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-center">
                Already have an account? <Link className="login-link" to="/login">Login</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
