import React, { Component } from "react";
import { FormBtn } from "../../UiComponents/Form";
import "./ChallengeDetails.css";

class ChallengeDetails extends Component {
  componentDidMount() {
    this.loadChallenge();
  }
  state = {
    title: "Workout title",
    description: "Workout description",
    days: ["Workout 1", "Workout2", "Workout3", "...... more workout days"],
    numUsers: 100
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
            <div className="card-body">
              <div>{this.state.numUsers} challengers</div>
              {this.state.description}
            </div>
            <FormBtn href="#" className="btn btn-primary join-btn ">
              Join Challenge
            </FormBtn>
            <hr />
            <div className="workout-days">
              {this.state.days &&
                this.state.days.map(day => {
                  return <p>{day}</p>;
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChallengeDetails;
