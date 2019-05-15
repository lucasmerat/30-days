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
    allChallenges: null,
    userChallenges: null,
    userData: null,
    numDays: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
  };
  componentDidMount() {
    this.getUserInfo();
  }
  loadChallenges = () => {
    API.getChallenges(this.state.userData._id).then(response => {
      this.setState({
        allChallenges: response.data
      });
    });
    API.getChallengesFromUser(this.state.userData._id).then(response => {
      this.setState({
        userChallenges: response.data
      });
    });
  };
  joinChallenge = (challengeId, userId) => {
    API.addUserChallenge(challengeId, userId).then(result => {
      this.loadChallenges();
    });
  };
  postToChallenge = (post) => {
    API.createPost(post).then(result=>{
      console.log(result)
    })
  };
  readCookie() {
    var allcookies = document.cookie;
    var cookiearray = [];
    var userId = "";

    if (allcookies.length) {
      cookiearray = allcookies.split(";");
    }
    if (cookiearray.length) {
      userId = cookiearray[0].split("=")[1];
    }
    return userId;
  }
  getUserInfo() {
    const userId = this.readCookie();
    if (userId) {
      API.getUser(userId)
        .then(res =>
          this.setState({ userData: res.data }, () => {
            this.loadChallenges();
          })
        )
        .catch(err => console.log(err));
    }
  }
  handleClick = e => {
    console.log(
      "Here we call a function to add the challenge to DB and reload the challenges afterwards"
    );
  };
  render() {
    return this.state.userData ? (
      <div>
        <ChallengesNav />
        <ProfileNav
          userName={this.state.userData.username}
          profilePic={this.state.userData.profile_picture}
          bio={this.state.userData.bio}
        />
        <Switch>
          <Route
            path={"/profile/browse"}
            render={props => (
              <BrowseChallenges
                {...props}
                challenges={this.state.allChallenges}
                userId={this.state.userData._id}
                loadChallenges={this.loadChallenges}
                joinChallenge={this.joinChallenge}
              />
            )}
          />
          <Route
            path={"/profile/ongoing"}
            render={props => (
              <OngoingChallenges
                {...props}
                challenges={this.state.userChallenges}
              />
            )}
          />
          <Route
            path={"/profile/done"}
            render={props => (
              <DoneChallenges
                {...props}
                challenges={this.state.userChallenges}
              />
            )}
          />
          <Route
            path={"/profile/challenge/:id"}
            render={props => (
              <ChallengeDetails
                {...props}
                userId={this.state.userData._id}
                userChallenges={this.state.userChallenges}
                loadChallenges={this.loadChallenges}
                joinChallenge={this.joinChallenge}
                postToChallenge={this.postToChallenge}
              />
            )}
          />
          <Route
            path={"/profile/create"}
            render={props => (
              <CreateChallenges
                {...props}
                numDays={this.state.numDays}
                handleClick={this.handleClick}
                loadChallenges={this.loadChallenges}
              />
            )}
          />
          <Route
            path={"/profile/timeline"}
            render={props => (
              <Timeline {...props} userId={this.state.userData._id} />
            )}
          />
        </Switch>
        <div className="row">
          <div className="col-4" />
          <div className="col-8" />
        </div>
      </div>
    ) : (
      <div>Loading user data</div>
    );
  }
}

export default Profile;
