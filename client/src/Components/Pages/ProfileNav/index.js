import React from "react";
import "./style.css";
import { FormBtn } from "../../UiComponents/Form";
import {Link} from "react-router-dom";

function ProfileNav(props) {
  return (
        <div className="col-4 profile-nav profile-float">
          <div className="row">
                      <div className="col-6"><img className="profile-img" alt="profile" src="https://scontent-dfw5-1.cdninstagram.com/vp/4c24b1fbb2f9ca52d303c839b7dfd3fb/5D76A903/t51.2885-19/s150x150/49643358_370948406801366_6866656548769234944_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com">
                      </img>
                      </div>
                      <div className="col-6 info-container">
                      <div className="user-name">
                      <h3>Dina Khouri</h3>
                      </div>
                      <div className="user-about">
                          <h6>blah blah blah blah blah
                          blah blah blah blah blah
                          blah blah blah blah blah
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


