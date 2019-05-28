import React from "react";
import { FormBtn } from "../../../BootstrapComponents/Form/";
import { Link } from "react-router-dom";
import "./TimelinePost.css";
import moment from "moment";

export default function TimelinePost({
  username,
  profilePicture,
  challengeName,
  createdAt,
  postBody,
  postImage,
  postDay,
  challengeId
}) {

  return (
    <div className="timeline-post-box">
      <div className="card post-card gedf-card">
        <div className="card-header post-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <img
                  className="rounded-circle"
                  width="45"
                  src={profilePicture}
                  alt=""
                />
              </div>
              <div className="ml-2">
                <div className="h5 m-0">{username}</div>
                <div className="h5 m-0">
                  From workout:{" "}
                  <Link
                    className="workout-link"
                    to={`/profile/challenge/${challengeId}`}
                  >
                    {" "}
                    {challengeName}
                  </Link>
                  <p className="time-posted">{moment(createdAt).calendar()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body post-content">
          <h4 className="card-title card-title-post">Posted on Day {postDay}</h4>
          <h5 className="card-text card-text-post my-3 post-body">{postBody}</h5>
          {postImage ? (<img className="img-fluid" src={postImage} alt="" />): (null)}
        </div>
        <div className="card-footer">
          <FormBtn className="edit-profile-btn">Like</FormBtn>
        </div>
      </div>
    </div>
  );
}
