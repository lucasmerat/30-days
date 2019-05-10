import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Pages/login";
import Signup from "./Components/Pages/signup";
import NoMatch from "./Components/Pages/NoMatch";
import Nav from "./Components/UiComponents/Nav";
import Profile from "./Components/Pages/Profile";
import BrowseChallenges from "./Components/Pages/BrowseChallenges";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
