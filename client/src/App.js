import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/Auth/PrivateRoute"
import Nav from "./Components/Layout/Nav";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import NoMatch from "./Components/Auth/NoMatch";
import Profile from "./Components/Profile/ProfileWrapper";
import Footer from "./Components/Layout/Footer";

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
          <Route path="/signup" component={Signup} />
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
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
     
    );
  }
}

export default App;
