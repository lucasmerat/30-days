import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Components/UiComponents/Nav";
import Login from "./Components/Pages/Login/";
import NoMatch from "./Components/Pages/NoMatch/";
import Signup from "./Components/Pages/SignUp/";
import Profile from "./Components/Pages/Profile";

class App extends Component {
  componentDidMount(){
    this.readCookie();
  }

  readCookie (){
    var allcookies = document.cookie;
    var cookiearray = [];
    var username = '';
    
    if (allcookies.length) {
      cookiearray = allcookies.split(";");
    }
    if (cookiearray.length) {
      username = cookiearray[0].split("=")[1];
    }
    console.log(username);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
