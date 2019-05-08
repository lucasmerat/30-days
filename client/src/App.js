import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SampleResponse from "./Components/SampleResponse";
import NavBarWrapper from "./Components/NavBar/NavBarWrapper";
import LoginWrapper from "./Components/Login/LoginWrapper";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBarWrapper />
          <SampleResponse />
          <Switch>
            <Route path="/login" component={LoginWrapper}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;