import React from "react";
import "./style.css";
import CategoryCard from "../CategoryCard";
import ChallengesNav from "../ChallengesNav";
import ProfileNav from "../ProfileNav";
import BrowseChallenges from "../BrowseChallenges";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function profile(props) {
  return (
    <div>
      <ChallengesNav />
      <ProfileNav />
      <BrowserRouter>
        <Switch>
          <Route exact path="/profile/browse" component={BrowseChallenges}></Route>
        </Switch>
      </BrowserRouter>
      <div className="row">
        <div className="col-4" />
        <div className="col-8">
        </div>
      </div>
    </div>
  );
}

export default profile;
