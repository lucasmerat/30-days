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
    numUsers: 0,
    isJoinedUser: false
  };
  loadChallenge = () => {
    API.getChallengebyId(this.props.match.params.id)
      .then(res =>
        this.setState({
          title: res.data.title,
          description: res.data.description,
          days: res.data.days,
          numUsers: res.data.user.length,
          image: res.data.image
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return this.props.userChallenges ? (
      <div className="row">
        <div className="card challenge-details-card">
          <div className="card-body">
            <img alt="..." src={this.state.image} className="details-image" />
            <h5 className="card-title challenge-title">{this.state.title}</h5>
            <div className="card-body">
              <div>{this.state.numUsers} challengers</div>
              {this.state.description}
            </div>
            {/* Checks that user is not already part of challenge and shows button if they are not */}
            {!this.props.userChallenges.some(
              challenge => challenge._id === this.props.match.params.id
            ) ? (
              <FormBtn
                onClick={() => {
                  this.props.joinChallenge(this.props.match.params.id, {
                    userId: this.props.userId
                  });
                }}
                href="#"
                className="btn btn-primary join-btn "
              >
                Join Challenge
              </FormBtn>
            ) : (<div><FormBtn
                onClick={() => {
                  this.props.postToChallenge();
                }}
                href="#"
                className="btn btn-primary join-btn "
              >
                Post to challenge
              </FormBtn></div>)}
            <hr />
            <div className="workout-days">
              {this.state.days &&
                this.state.days.map((day, index) => {
                  return (
                    <p key={day}>
                      <b>Day {index + 1} </b> <hr />{" "}
                      {day === null ? "Break" : day}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>Loading challenge</div>
    );
  }
}

export default ChallengeDetails;
