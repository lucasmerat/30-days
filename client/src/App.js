import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Components/UiComponents/Nav";
import Login from "./Components/Pages/Login/";
import NoMatch from "./Components/Pages/NoMatch/";
import Signup from "./Components/Pages/SignUp/";
import Profile from "./Components/Pages/Profile";
import API from "./utils/API";

class App extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    this.getUserInfo();
  }

  readCookie() {
    var allcookies = document.cookie;
    var cookiearray = [];
    var username = "";

    if (allcookies.length) {
      cookiearray = allcookies.split(";");
    }
    if (cookiearray.length) {
      username = cookiearray[0].split("=")[1];
    }
    return username;
  }
  getUserInfo() {
    const username = this.readCookie();
    if (username) {
      console.log(username);
      API.getUser(username)
        .then(res => this.setState({ user: res.data }))
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route
              path={"/profile"}
              render={props => (
                <Profile
                  {...props}
                  userName={this.state.user.username}
                  profilePic={this.state.user.profile_picture}
                />
              )}
            />
            <Route exact path="/signup" component={Signup} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
