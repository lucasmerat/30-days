import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import login from "./Components/Pages/login";
import signup from "./Components/Pages/signup";
import NoMatch from "./Components/Pages/NoMatch";
import Nav from "./Components/UiComponents/Nav";
import profile from "./Components/Pages/Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/", "/login"]} component={login} />
            <Route path="/profile" component={profile} />
            <Route exact path="/signup" component={signup} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
