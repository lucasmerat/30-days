import React, { Component } from "react";
import "./Timeline.css";
import TimelinePost from "../TimelinePost";
import API from "../../../utils/API";

class Timeline extends Component {
  state = {
    posts: null
  }
  loadPosts = () =>{
   console.log("Call load posts when component mounts to get post data and pass it doen to the timelinepost componenet")
  }
  render() {
    return (
      <div className="row">
        <div className="card timeline-card">
          <div className="card-body">
              <TimelinePost posts={this.state.posts} />
            <div className="card-body" />
          </div>
        </div>
      </div>
    );
  }
}

export default Timeline;
