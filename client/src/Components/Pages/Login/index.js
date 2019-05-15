import dotenv from "dotenv";
import React, { Component } from "react";
import Jumbotron from "../../UiComponents/Jumbotron";
import { InstagramLoginButton } from "react-social-login-buttons";
import { Col, Row, Container } from "../../UiComponents/Grid";
import { Input, FormBtn, FormBtnlink } from "../../UiComponents/Form";
dotenv.config();

var instaLink;
var googleLink;

if (process.env.NODE_ENV === "production") {
  instaLink = "/api/login";
  googleLink = "/api/auth/google";
} else {
  instaLink = "http://localhost:5000/api/login";
  googleLink = "http://localhost:5000/api/auth/google";
}

class login extends Component {
  state = {};

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-4" />
          <Col size="md-4">
            <a href={instaLink}>
              <InstagramLoginButton />
            </a>
            <a href={googleLink}>Sign In with Google</a>
            <form>
              <Input name="username" placeholder="Username (required)" />
              <Input name="password" placeholder="Password (required)" />

              <FormBtn href="/profile">Login</FormBtn>
            </form>
            <FormBtnlink className="btn btn-link" href="/signup">
              Sign up
            </FormBtnlink>
          </Col>
          <Col size="md-4" />
        </Row>
      </Container>
    );
  }
}

export default login;
