import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SampleResponse from "./Components/SampleResponse";
import NavBarWrapper from "./Components/NavBar/NavBarWrapper";
import LoginWrapper from "./Components/Login/LoginWrapper";
import login from "./pages/login";
import signup from "./pages/signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./Components/Nav";
import CategoryCard from "./Components/CategoryCard";
import profile from "./Components/Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/", "/login"]} component={login} />
            <Route exact path="/profile" component={profile} />
            {/* <Route exact path="/main" component={main} /> */}
            <Route exact path="/categories" component={CategoryCard} />
            <Route exact path="/signup" component={signup} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
