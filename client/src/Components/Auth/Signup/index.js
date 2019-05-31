import React, { Component } from "react";
import { Link} from "react-router-dom";
import API from "../../../utils/API";
import "./Signup.css";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    errorMessage:""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    API.signupUser(this.state)
      .then(res => {
        if (!res.data.success) {
          this.setState({
            errorMessage: res.data.message
          });
        } else {
           this.props.history.push('/login')
        }
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="login-row row">
            <div className="col-md-4" />
            <div className="social-button-box col-md-4">
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
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    className="signup-input"
                    required
                  />
                   <div className="error-message">{this.state.errorMessage.length > 0 && <p>{this.state.errorMessage}</p>}</div>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
