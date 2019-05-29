import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/AppComponents/Auth/PrivateRoute"
import Nav from "./Components/BootstrapComponents/Nav";
import Login from "./Components/AppComponents/Auth/Login";
import NoMatch from "./Components/AppComponents/Auth/NoMatch";
import Profile from "./Components/AppComponents/Profile/ProfileWrapper";
import Footer from "./Components/BootstrapComponents/Footer";

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
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer></Footer>
      </BrowserRouter>
     
    );
  }
}

export default App;
