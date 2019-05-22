import React from "react";
import "./style.css";
import { FormBtn,FormBtnlink } from "../../../BootstrapComponents/Form";
import {Link} from "react-router-dom";

function ProfileNav({ userName, profilePic,bio }) {

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

  function LogOut(){
  var now = new Date();
  now.setMonth(now.getMonth() - 1);
  var cookievalue = readCookie() + ";";
  document.cookie ="userId=" + cookievalue + "expires=" + now.toUTCString() + "; path=/";
  };

  return (
        <div className="col-3 profile-nav profile-float">
          <div className="row">
                      <div className="col-6"><img className="profile-img" alt="profile" src={profilePic}>
                      </img>
                      </div>
                      <div className="col-6 info-container">
                      <div className="user-name">
                      <h3>{userName}</h3>
                      </div>
                      <div className="user-about">
                          <h6>{bio}
                          </h6>
                      </div>
                      </div>
                  </div>
                  <div className="row buttons-row">
                  <div className="col-4">
                  <FormBtnlink className="logout-profile-btn">
                   <Link className="nav-link logout-link" to="/" onClick={LogOut}>Log Out</Link>
                  </FormBtnlink>
                  </div>
                  <div className="col-4">
                  <FormBtn className="edit-profile-btn">
                    <Link className="nav-link" to="/profile/create">Create a Workout</Link>
                  </FormBtn>
                  </div>
                  </div>              
        <div className="col-8"></div>
    </div>
   
  );
}

export default ProfileNav;


