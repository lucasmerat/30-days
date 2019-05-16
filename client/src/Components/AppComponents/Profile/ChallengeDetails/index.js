import React, { Component } from "react";
import { Input, FormBtn } from "../../../BootstrapComponents/Form/";
// import { Input, FormBtn, FormBtnlink } from "../../UiComponents/Form";
import "./ChallengeDetails.css";
import API from "../../../../utils/API";
import { Modal } from "react-bootstrap";
// import { Modal, Button } from "react-bootstrap";

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
    postTitle: null,
    postBody: null
  };
  handleShowModal = () => {
    this.setState({ show: true });
  };
  handleCloseModal = () => {
    this.setState({ show: false });
    const post = {
      title: this.state.postTitle,
      body: this.state.postBody,
      image: this.state.postImage,
      challenge: this.props.match.params.id,
      user: this.props.userId,
      createdAt: new Date()
    };
    this.props.postToChallenge(post);
  };
  handleFileSelect = e => {
    console.log(e.target.files[0]);
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
  handlePostTitleChange = e => {
    this.setState({
      postTitle: e.target.value
    });
  };
  loadChallenge = () => {
    API.getChallengebyId(this.props.match.params.id)
      .then(res =>
        this.setState({
          challengeTitle: res.data.title,
          challengeDescription: res.data.description,
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
            <h5 className="card-title challenge-title">
              {this.state.challengeTitle}
            </h5>
            <div className="card-body">
              <div>{this.state.numUsers} challengers</div>
              {this.state.challengeDescription}
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
                  this.setState({
                    numUsers: this.state.numUsers + 1
                  });
                }}
                href="#"
                className="btn btn-primary join-btn "
              >
                Join Challenge
              </FormBtn>
            ) : (
              <div>
                <FormBtn
                  onClick={() => {
                    this.handleShowModal();
                  }}
                  href="#"
                  className="btn btn-primary join-btn "
                >
                  Post to challenge
                </FormBtn>
                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Share with other challengers!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form action="/" />
                    <label>Title</label>
                    <Input onChange={this.handlePostTitleChange} />
                    <label>Post body</label>
                    <Input onChange={this.handlePostBodyChange} />
                    <label>Image</label>
                    <Input type="file" onChange={this.handleFileSelect} />
                  </Modal.Body>
                  <Modal.Footer>
                    <FormBtn onClick={this.handleCloseModal}>Add Post</FormBtn>
                  </Modal.Footer>
                </Modal>
              </div>
            )}
            <hr />
            <div className="workout-days">
              {this.state.days &&
                this.state.days.map((day, index) => {
                  return (
                    <div className= "day-section" key={index}>
                      <b>Day {index + 1} </b> <hr />{" "}
                      {day === null ? "Break" : day}
                    </div>
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
