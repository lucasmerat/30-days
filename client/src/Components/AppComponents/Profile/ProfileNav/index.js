import React from "react";
import "./style.css";
import { FormBtn} from "../../../BootstrapComponents/Form";
import { Link } from "react-router-dom";

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
      <div className="row">
      <div className="user-name col-12 info-container">
            <h3 className="User-name">{userName}</h3>
        </div>
        <div className="col-12">
          <img className="profile-img img-fluid" alt="profile" src={profilePic} />
        </div>
          
      </div>
      <div className="row buttons-row">
      <div className="button-col col-12">
          <FormBtn className="profile-nav-btn create-workout-link">
            <Link className="nav-link" to="/profile/create">
              Create workout
            </Link>
          </FormBtn>
        </div>
        <div className="button-col col-12">
          <FormBtn className="profile-nav-btn logout-link">
            <Link className="nav-link" to="/" onClick={LogOut}>
              Log Out
            </Link>
          </FormBtn>
        </div>
      </div>
      <div className="col-8" />
    </div>
  );
}

export default ProfileNav;
