import React, { Component } from "react";
import ChallengesNav from "../ChallengesNav";
import ProfileNav from "../ProfileNav";
import BrowseChallenges from "../BrowseChallenges";
import OngoingChallenges from "../OngoingChallenges";
import DoneChallenges from "../DoneChallenges";
import Timeline from "../Timeline";
import CreateChallenges from "../CreateChallenges";
import API from "../../../utils/API";
import { Switch, Route } from "react-router-dom";
import "./style.css";

class Profile extends Component {
  state = {
    challenges: null
  };
  componentDidMount() {
    this.loadChallenges();
  }
  loadChallenges = () =>{
    API.getChallenges().then((response)=>{
      this.setState({
        challenges: response.data
      })
    })
  }
  handleClick = e => {
    console.log("Here we call a function to add the challenge to DB and reload the challenges afterwards");
  };
  render() {
    return (
      <div>
        <ChallengesNav />
        <ProfileNav />
        <Switch>
          <Route
            path={"/profile/browse"}
            render={props => (
              <BrowseChallenges {...props} challenges={this.state.challenges} />
            )}
          />
          <Route path={"/profile/ongoing"} component={OngoingChallenges} />
          <Route path={"/profile/done"} component={DoneChallenges} />
          <Route path={"/profile/timeline"} component={Timeline} />
          <Route
            path={"/profile/create"}
            render={props => (
              <CreateChallenges {...props} handleClick={this.handleClick} />
            )}
          />
        </Switch>
        <div className="row">
          <div className="col-4" />
          <div className="col-8" />
        </div>
      </div>
    );
  }
}

export default Profile;
