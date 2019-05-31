import React, { Component } from "react";
import API from "../../../../utils/API";
import TimelinePost from "../TimelinePost";
import "./Timeline.css";

const Timeline = ({ posts, userLogged, userId, loadPosts }) => {
  return (
    <div className="row">
      <div className="timeline-card">
        <div className="timeline-with-margin-row">
          {posts && posts.length > 0 ? (
            posts.map(post => {
              return (
                <TimelinePost
                  key={post._id}
                  postId={post._id}
                  username={post.user.username}
                  userLogged={userLogged}
                  profilePicture={post.user.profile_picture}
                  challengeName={post.challenge.title}
                  createdAt={post.createdAt}
                  postDay={post.postDay}
                  likes={post.likes.length}
                  userLikes={post.likes}
                  postBody={post.body}
                  postImage={post.image}
                  challengeId={post.challenge._id}
                  loadPosts={loadPosts}
                  userId={userId}
                />
              );
            })
          ) : (
            <div className="no-timeline-posts-msg">
              No timeline posts... join some workouts and start posting progress
            </div>
          )}
          <div className="card-body" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
