import React from "react";
import { InstagramLoginButton } from "react-social-login-buttons";
import { Col, Row, Container } from "../../../BootstrapComponents/Grid";
import { Input, FormBtn, FormBtnlink } from "../../../BootstrapComponents/Form";
import { Redirect } from "react-router-dom";

function Login(props) {
  let instaLink;
  let googleLink;
  if (process.env.NODE_ENV === "production") {
    instaLink = "/api/login";
    googleLink = "/api/auth/google";
  } else {
    instaLink = "http://localhost:5000/api/login";
    googleLink = "http://localhost:5000/api/auth/google";
  }
  return props.readCookie() ? (
    <Redirect to="/profile/browse" />
  ) : (
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

export default Login;
