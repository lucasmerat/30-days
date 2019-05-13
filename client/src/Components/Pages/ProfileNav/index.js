import React from "react";
import "./style.css";
import { FormBtn } from "../../UiComponents/Form";
import {Link} from "react-router-dom";

function ProfileNav({ userName, profilePic,bio }) {
  return (
        <div className="col-4 profile-nav profile-float">
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
                  {/* <FormBtn className="edit-profile-btn">
                    Edit Profile
                  </FormBtn> */}
                  </div>
                  <div className="col-4">
                  <FormBtn className="edit-profile-btn">
                    <Link className="nav-link" to="/profile/create">Create a Workout</Link>
                  </FormBtn>
                  </div>
                  </div>
                        <div className="row challenge-summary-row">
                            <ul>
                                  <h5>Completed Challenges:</h5>
                                  <h5>Current Challenges:</h5>
                                  <h5>Success Rate:</h5>
                            </ul>
                        </div>
              
        <div className="col-8"></div>
    </div>
   
  );
}

export default ProfileNav;


