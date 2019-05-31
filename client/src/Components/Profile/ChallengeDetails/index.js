import React, { Component } from "react";
import moment from "moment";
import Countdown from "react-countdown-now";
import API from "../../../utils/API";
import { Modal } from "react-bootstrap";
import "./ChallengeDetails.css";

class ChallengeDetails extends Component {
  componentDidMount() {
    this.loadChallenge();
  }
  state = {
    challengeTitle: "",
    challengeDescription: "",
    days: [],
    numUsers: 0,
    showModal: false,
    postImage: null,
    postBody: null,
    startDate: null
  };
  loadChallenge = () => {
    API.getChallengebyId(this.props.match.params.id)
      .then(res =>
        this.setState({
          challengeTitle: res.data.title,
          challengeDescription: res.data.description,
          days: res.data.days,
          numUsers: res.data.user.length,
          image: res.data.image,
          startDate: res.data.startDate
        })
      )
      .catch(err => console.log(err));
  };
  handleShowModal = () => {
    this.setState({ show: true });
  };
  handleCloseModal = () => {
    this.setState({ show: false });
  };
  handleFileSelect = e => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      this.setState({ postImage: reader.result });
    };

    this.setState({
      postImage: e.target.files[0]
    });
  };
  handlePostBodyChange = e => {
    this.setState({
      postBody: e.target.value
    });
  };
  handleAddPost = () => {
    this.setState({ show: false });
    const post = {
      postDay: moment().diff(moment(this.state.startDate), "days") + 1,
      body: this.state.postBody,
      image: this.state.postImage,
      challenge: this.props.match.params.id,
      user: this.props.userId,
      createdAt: new Date()
    };
    this.props.postToChallenge(post);
    this.props.history.push("/profile/timeline");
  };

  render() {
    return this.props.userChallenges ? (
      <div className="row">
        <div className="challenge-details-with-margin-row">
          <div className="card challenge-details-card">
            <div className="card-body">
              <div className="row">
                <div className="col-4 active-users-join-box">
                  <img
                    alt="..."
                    src={this.state.image}
                    className="details-image"
                  />
                  {this.state.numUsers === 1 ? (
                    <div className="num-athletes">
                      {this.state.numUsers} active athlete
                    </div>
                  ) : (
                    <div className="num-athletes">
                      {this.state.numUsers} active athletes
                    </div>
                  )}
                  {/* Checks that user is not already part of challenge and shows button if they are not */}
                  {!this.props.userChallenges.some(
                    challenge => challenge._id === this.props.match.params.id
                  ) ? (
                    <button
                      onClick={() => {
                        this.props.joinChallenge(this.props.match.params.id, {
                          userId: this.props.userId
                        });
                        this.setState({
                          numUsers: this.state.numUsers + 1
                        });
                      }}
                      href="#"
                      className="btn btn-success join-btn"
                    >
                      Join Workout
                    </button>
                  ) : (
                    <>
                      {moment(this.state.startDate)
                        .add(30, "days")
                        .isAfter(moment()) &&
                      moment(this.state.startDate).isBefore(moment()) ? (
                        <div className="post-button-box">
                          <button
                            onClick={() => {
                              this.handleShowModal();
                            }}
                            href="#"
                            className="btn btn-success join-btn"
                        >Post to Workout</button>
                          <Modal
                            show={this.state.show}
                            onHide={this.handleCloseModal}
                          >
                            <form onSubmit={this.handleAddPost}>
                              <Modal.Header closeButton>
                                <Modal.Title>
                                  Share with other challengers!
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <div className="modal-question-box">
                                  <label>
                                    What were your thoughts on the workout?
                                  </label>
                                  <textarea
                                    onChange={this.handlePostBodyChange}
                                    className="create-workout-input"
                                    required
                                  />
                                  <label>Share an image</label>
                                  <div className="upload-btn-wrapper">
                                    <button className="upload-btn btn btn-success">
                                      Upload a file
                                    </button>
                                    <input
                                      type="file"
                                      onChange={this.handleFileSelect}
                                    />
                                  </div>
                                </div>
                              </Modal.Body>
                              <Modal.Footer>
                                <button
                                  type="submit"
                                  className="btn btn-success"
                                >Add post</button>
                              </Modal.Footer>
                            </form>
                          </Modal>
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
                <div className="col-8 workout-description-box">
                  <h5 className="card-title challenge-details-title">
                    {this.state.challengeTitle}
                  </h5>
                  <h5>
                    {moment(this.state.startDate).diff(moment(), "days") > 0 ? (
                      <div>
                        Workout begins in{" "}
                        <div className="timer-box">
                          <Countdown
                            date={moment(this.state.startDate).toDate()}
                            precision={3}
                          />
                        </div>
                        <div className="countdown-intervals">
                          Days | Hrs | Min | Sec
                        </div>
                      </div>
                    ) : (
                      <div>
                        <span>Workout ends in</span>{" "}
                        <div className="timer-box">
                          <Countdown
                            date={moment(this.state.startDate)
                              .add(30, "days")
                              .toDate()}
                            precision={3}
                          />{" "}
                          <div className="countdown-intervals">
                            Days | Hrs | Min | Sec
                          </div>
                        </div>
                      </div>
                    )}
                  </h5>
                  <div className="card-body">
                    <div className="challenge-description">
                      {this.state.challengeDescription}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="workout-days">
                {this.state.days &&
                  this.state.days.map((day, index) => {
                    return (
                      <div className="day-section" key={index}>
                        <b>
                          {moment(this.state.startDate)
                            .add(index, "d")
                            .format("MM/DD/YYYY")}
                        </b>{" "}
                        <hr />{" "}
                        <p className="workout-day-description">
                          {day === "" ? "Rest Day" : day}
                        </p>
                      </div>
                    );
                  })}
              </div>
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
