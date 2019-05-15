import React, { Component } from "react";
import Jumbotron from "../../UiComponents/Jumbotron";
import { InstagramLoginButton } from "react-social-login-buttons";
import { Col, Row, Container } from "../../UiComponents/Grid";
import { Input, FormBtn, FormBtnlink } from "../../UiComponents/Form";

class login extends Component {
  state = {};

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-4" />
          <Col size="md-4">
            <a href="http://localhost:5000/api/login">
              <InstagramLoginButton />
            </a>
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
