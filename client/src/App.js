import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import login from "./pages/login";
import signup from "./pages/signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./Components/Nav";
import profile from "./Components/Profile";

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
