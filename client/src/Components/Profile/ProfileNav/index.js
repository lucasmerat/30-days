import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../../utils/API";
import "./ProfileNav.css";

class ProfileNav extends Component {
  state = {
    isImageBtnClicked: false,
    profileImage: "",
    postImage: ""
  };
  readCookie = () => {
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
  };

  LogOut = () => {
    var now = new Date();
    now.setMonth(now.getMonth() - 1);
    var cookievalue = this.readCookie() + ";";
    document.cookie =
      "userId=" + cookievalue + "expires=" + now.toUTCString() + "; path=/";
  };
  handleImageChangeClick = e => {
    console.log("Setting to true");
    this.setState({
      isImageBtnClicked: !this.state.isImageBtnClicked
    });
  };
  handleFileSelect = e => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      this.setState({ postImage: reader.result }, () => {
        this.handleSavePhoto();
        this.setState({
          isImageBtnClicked: false
        });
      });
    };

    this.setState({
      profileImage: e.target.files[0]
    });
  };
  handleSavePhoto = () => {
    API.changeProfilePicture(this.props.userId, {
      picture: this.state.postImage
    });
  };
  render() {
    return (
      <div className="col-3 profile-nav profile-float">
        <div className="row user-row">
          <div className="user-name col-12 info-container">
            <h3 className="User-name">{this.props.userName}</h3>
          </div>
          <div className="col-12 profile-img-box">
            <div className="change-pic" />
            <img
              className="profile-img img-fluid"
              alt="profile"
              src={this.state.postImage || this.props.profilePic}
            />
          </div>
        </div>
        <div className="row buttons-row">
          <div className="button-col col-12">
            <Link className="nav-link" to="/profile/create">
              <button
                className="profile-nav-btn create-workout-link btn btn-success"
            >Create Workout</button>
            </Link>
          </div>
          <div className="button-col col-12">
            <Link className="nav-link " to="/" onClick={this.LogOut}>
              <button
                className="profile-nav-btn logout-link btn btn-success"
              >Log Out</button>
            </Link>
          </div>
          {this.props.password ? (
            <div className="button-col col-12 new-profile-image-box">
              <button
                className="profile-nav-btn create-workout-link change-profile-photo btn btn-success"
                onClick={this.handleImageChangeClick}
              >Change Profile Pic</button>
              {this.state.isImageBtnClicked ? (
                <div className="add-file-box">
                  <input
                    className="add-file-button"
                    type="file"
                    onChange={this.handleFileSelect}
                  />
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="col-8" />
      </div>
    );
  }
}

export default ProfileNav;
