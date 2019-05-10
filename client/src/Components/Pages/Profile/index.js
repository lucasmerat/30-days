import React from "react";
import "./style.css";
import ChallengesNav from "../ChallengesNav";
import ProfileNav from "../ProfileNav";
import BrowseChallenges from "../BrowseChallenges";
import OngoingChallenges from "../OngoingChallenges";
import DoneChallenges from "../DoneChallenges";
import Timeline from "../Timeline";
import CreateChallenges from "../CreateChallenges";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function profile(props) {
  console.log(props.location.pathname)
  return (
    <div>
      <ChallengesNav />
      <ProfileNav />
        <Switch>
          <Route path={'/profile/browse'} component={BrowseChallenges} />
          <Route exact path={'/profile/ongoing'} component={OngoingChallenges}></Route>
          <Route exact path={'/profile/done'} component={DoneChallenges}></Route>
          <Route exact path={'/profile/timeline'} component={Timeline}></Route>
          <Route exact path={'/profile/create'} component={CreateChallenges}></Route>
        </Switch>
      <div className="row">
        <div className="col-4" />
        <div className="col-8">
        </div>
      </div>
    </div>
  );
}

export default profile;
