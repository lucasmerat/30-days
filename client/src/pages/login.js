import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron";
import { Col, Row, Container } from "../Components/Grid";
import { Input, TextArea, FormBtn,FormBtnlink } from "../Components/Form";

class login extends Component {
  state = {
   
  };

  
  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-4"></Col>
          <Col size="md-4">
            <Jumbotron>
              <h1>Login with Instagram</h1>
            </Jumbotron>
            <form>
              <Input
                name="username"
                placeholder="Username (required)"
              />
              <Input
                name="password"
                placeholder="Password (required)"
              />
              
              <FormBtn href="/profile"
              >
                Login
              </FormBtn>
            </form>
            <FormBtnlink className="btn btn-link" href="/signup">
                Sign up
              </FormBtnlink>
          </Col>
          <Col size="md-4"></Col>
        </Row>
      </Container>
    );
  }
}

export default login;
