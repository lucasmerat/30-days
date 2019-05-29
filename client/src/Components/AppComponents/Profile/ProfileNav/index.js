import React from "react";
import { FormBtn } from "../../../BootstrapComponents/Form";
import { Link } from "react-router-dom";
import "./ProfileNav.css";

function ProfileNav({ userName, profilePic }) {
  function readCookie() {
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

  function LogOut() {
    var now = new Date();
    now.setMonth(now.getMonth() - 1);
    var cookievalue = readCookie() + ";";
    document.cookie =
      "userId=" + cookievalue + "expires=" + now.toUTCString() + "; path=/";
  }

  return (
    <div className="col-3 profile-nav profile-float">
      <div className="row user-row">
        <div className="user-name col-12 info-container">
          <h3 className="User-name">{userName}</h3>
        </div>
        <div className="col-12 profile-img-box">
          <img
            className="profile-img img-fluid"
            alt="profile"
            src={profilePic}
          />
        </div>
      </div>
      <div className="row buttons-row">
        <div className="button-col col-12">
          <Link
            className="nav-link"
            to="/profile/create"
          >
            <FormBtn className="profile-nav-btn create-workout-link"> Create workout</FormBtn>
          </Link>
        </div>
        <div className="button-col col-12">
          <Link
            className="nav-link "
            to="/"
            onClick={LogOut}
          >
            <FormBtn className="profile-nav-btn logout-link">Log Out</FormBtn>
          </Link>
        </div>
      </div>
      <div className="col-8" />
    </div>
  );
}

export default ProfileNav;
