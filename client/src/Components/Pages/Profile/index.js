import React, { Component } from "react";
import ChallengesNav from "../ChallengesNav";
import ProfileNav from "../ProfileNav";
import BrowseChallenges from "../BrowseChallenges";
import OngoingChallenges from "../OngoingChallenges";
import DoneChallenges from "../DoneChallenges";
import ChallengeDetails from "../ChallengeDetails";
import Timeline from "../Timeline";
import CreateChallenges from "../CreateChallenges";
import API from "../../../utils/API";
import { Switch, Route } from "react-router-dom";
import "./style.css";

class Profile extends Component {
  state = {
    challenges: null,
    numDays: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
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
              <BrowseChallenges {...props} challenges={this.state.challenges} key="browse-challenges" />
            )}
          />
          <Route
            path={"/profile/ongoing"}
            render={props => (
              <OngoingChallenges {...props} challenges={this.state.challenges} key="ongoing-challenges" />
            )}
          />
          <Route
            path={"/profile/done"}
            render={props => (
              <OngoingChallenges {...props} challenges={this.state.challenges} key="done-challenges" />
            )}
          />
          <Route
            path={"/profile/ongoing"}
            render={props => (
              <Timeline {...props} challenges={this.state.challenges} key="timeline" />
            )}
          />
          <Route
            path={"/profile/challenge/:id"}
            render={props => (
              <ChallengeDetails {...props} />
            )}
          />
          <Route
            path={"/profile/create"}
            render={props => (
              <CreateChallenges {...props} numDays={this.state.numDays} handleClick={this.handleClick} key="create-challenges" />
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
