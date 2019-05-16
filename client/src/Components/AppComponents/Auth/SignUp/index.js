import React, { Component } from "react";
import Jumbotron from "../../../BootstrapComponents/Jumbotron";
import { Col, Row, Container } from "../../../BootstrapComponents/Grid";
import { Input, FormBtn } from "../../../BootstrapComponents/Form";

class signup extends Component {
  state = {
   
  };

  
  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-4"></Col>
          <Col size="md-4">
            <Jumbotron>
              <h1>Sign up</h1>
            </Jumbotron>
            <form>
              <Input
                name="name"
                placeholder="Name (required)"
              />
              <Input
                name="username"
                placeholder="Username (required)"
              />
               <Input
                name="email"
                placeholder="E-mail (required)"
              />
              <Input
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
              >
                Sign up
              </FormBtn>
            </form>
          </Col>
          <Col size="md-4"></Col>
        </Row>
      </Container>
    );
  }
}

export default signup;
