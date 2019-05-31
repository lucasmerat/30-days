import React, { Component } from "react";
import { FormBtn } from "../../../BootstrapComponents/Form";
import { Link } from "react-router-dom";
import API from "../../../../utils/API";
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
    })
      .then(data => {
        console.log(data);
        this.props.getUserInfo();
      })
      .catch(err => {
        console.log(err);
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
          {this.props.password ? (
            <div className="button-col col-12 new-profile-image-box">
              <FormBtn
                className="profile-nav-btn create-workout-link change-profile-photo"
                onClick={this.handleImageChangeClick}
              >
                {" "}
                Change profile photo
              </FormBtn>
              {this.state.isImageBtnClicked ? (
                <div className="add-file-box">
                  <input className="add-file-button" type="file" onChange={this.handleFileSelect} />
                </div>
              ) : null}
            </div>
          ) : null}

          <div className="button-col col-12">
            <Link className="nav-link" to="/profile/create">
              <FormBtn className="profile-nav-btn create-workout-link">
                {" "}
                Create workout
              </FormBtn>
            </Link>
          </div>
          <div className="button-col col-12">
            <Link className="nav-link " to="/" onClick={this.LogOut}>
              <FormBtn className="profile-nav-btn logout-link">Log Out</FormBtn>
            </Link>
          </div>
        </div>
        <div className="col-8" />
      </div>
    );
  }
}

export default ProfileNav;
