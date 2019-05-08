import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./pages/login";
import signup from "./pages/signup";
import NoMatch from "./pages/NoMatch";
// import main from "./components/main";
import Nav from "./components/Nav";
import CategoryCard from "./components/categories";
import profile from "./components/Profile";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={login} />
          <Route exact path="/profile" component={profile} />
          {/* <Route exact path="/main" component={main} /> */}
          <Route exact path="/login" component={login} />
          <Route exact path="/categories" component={CategoryCard} />
          <Route exact path="/signup" component={signup} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
