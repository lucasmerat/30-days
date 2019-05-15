import React from "react";
import { FormBtn, FormBtnlink } from "../../UiComponents/Form";
import "./TimelinePost.css";
import moment from "moment";

export default function TimelinePost({
  username,
  profilePicture,
  challengeName,
  postTitle,
  createdAt,
  postBody,
  postImage
}) {
  return (
    <div>
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
                <div className="h5 m-0">From challenge: {challengeName}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="text-white h7 mb-2">
            {" "}
            <i className="fa fa-clock-o" />{moment(createdAt).calendar()}
          </div>
          <h5 className="card-title">
            {postTitle}
          </h5>
          <img className="img-fluid" src={postImage} alt="" />

          <p className="card-text my-2">
            {postBody}
          </p>
        </div>
        <div className="card-footer">
          <FormBtn className="edit-profile-btn">Like</FormBtn>
        </div>
      </div>
    </div>
  );
}
