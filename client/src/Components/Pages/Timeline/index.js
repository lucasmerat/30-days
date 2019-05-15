import React, { Component } from "react";
import "./Timeline.css";
import TimelinePost from "../TimelinePost";
import API from "../../../utils/API";

class Timeline extends Component {
  state = {
    posts: null
  }
  loadPosts = () =>{
   API.getPosts(this.props.userId).then(posts=>{
     console.log(posts)
     this.setState({
       posts: posts.data
     })
   })
  }
  componentDidMount(){
    this.loadPosts();
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
