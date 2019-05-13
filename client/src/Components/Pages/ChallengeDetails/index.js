import React, { Component } from "react";
import { FormBtn } from "../../UiComponents/Form";
import "./ChallengeDetails.css";
import API from "../../../utils/API";

class ChallengeDetails extends Component {
  componentDidMount() {
    this.loadChallenge();
  }
  state = {
    title: "",
    description: "",
    days: [],
    numUsers: 0
  };
  loadChallenge = () => {
    API.getChallengebyId(this.props.match.params.id)
    .then (res=> this.setState({title: res.data.title, description:res.data.description, days: res.data.days, numUsers:res.data.user.length }))
    .catch(err => console.log(err));
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
                this.state.days.map((day,index) => {
                  return <p>Day {index+1}: {day===null?"Break":day}</p>;
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChallengeDetails;
