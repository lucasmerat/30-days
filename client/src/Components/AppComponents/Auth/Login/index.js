import React from "react";
import { InstagramLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { Col, Row, Container } from "../../../BootstrapComponents/Grid";
import { Redirect } from "react-router-dom";
import "./Login.css";

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
      <Row classes="login-row">
        <Col size="md-4" />
        <Col classes="social-button-box" size="md-4">
          <img className="login-logo img-fluid" src="/assets/images/LogoLarge.jpg" alt=""/>
          <a className="social-button" href={instaLink}>
            <InstagramLoginButton />
          </a>
          <a className="social-button" href={googleLink}>
            <GoogleLoginButton/>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
