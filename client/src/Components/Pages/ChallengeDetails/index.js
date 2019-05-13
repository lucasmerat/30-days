import React, { Component } from "react";
import { FormBtn } from "../../UiComponents/Form";
import "./ChallengeDetails.css";

class ChallengeDetails extends Component {
  componentDidMount() {
    this.loadChallenge();
  };
  state = {
    title: "Workout title",
    description: "Workout description",
    days: "",
    numUsers: null
  };
  loadChallenge = () => {
    console.log("API call here to load the challenge data");
  };

  render() {
    return (
      <div className="row">
        <div className="card challenge-details-card">
          <div className="card-body">
            <h5 className="card-title challenge-title">{this.state.title}</h5>
            <FormBtn href="#" className="btn btn-primary join-btn ">
                Join Challenge
              </FormBtn>
            <div className="row" />
          </div>
        </div>
      </div>
    );
  }
}

export default ChallengeDetails;
