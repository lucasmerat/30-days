import React, { Component } from "react";
import "./style.css";
import ChallengesNav from "../ChallengesNav";
import ProfileNav from "../ProfileNav";
import BrowseChallenges from "../BrowseChallenges";
import OngoingChallenges from "../OngoingChallenges";
import DoneChallenges from "../DoneChallenges";
import Timeline from "../Timeline";
import CreateChallenges from "../CreateChallenges";
import { Switch, Route } from "react-router-dom";

class Profile extends Component {
  state = {
    challenges: []
  }
  componentDidMount(){
    console.log("It mounted")
  }
  render(){
    return (
      <div>
        <ChallengesNav />
        <ProfileNav />
          <Switch>
            <Route path={'/profile/browse'} render={(props) => <BrowseChallenges {...props} challenges={this.state.challenges} />} />
            <Route path={'/profile/ongoing'} component={OngoingChallenges}></Route>
            <Route path={'/profile/done'} component={DoneChallenges}></Route>
            <Route path={'/profile/timeline'} component={Timeline}></Route>
            <Route path={'/profile/create'} component={CreateChallenges}></Route>
          </Switch>
        <div className="row">
          <div className="col-4" />
          <div className="col-8">
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
