import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/Pages/PrivateRoute"
import Nav from "./Components/UiComponents/Nav";
import Login from "./Components/Pages/Login/";
import NoMatch from "./Components/Pages/NoMatch/";
import Signup from "./Components/Pages/SignUp/";
import Profile from "./Components/Pages/Profile";

class App extends Component {
  state = {
    user: {}
  };

  readCookie() {
    var allcookies = document.cookie;
    var cookiearray = [];
    var userId = "";

    if (allcookies.length) {
      cookiearray = allcookies.split(";");
    }
    if (cookiearray.length) {
      userId = cookiearray[0].split("=")[1];
    }
    return userId;
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
          <Route
            exact path={["/", "/login"]}
            render={props => (
              <Login {...props} challenges={this.state.allChallenges} readCookie={this.readCookie}/>
            )}
          />
            <PrivateRoute
              path={"/profile"}
              component={Profile}
              readCookie={this.readCookie}
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
