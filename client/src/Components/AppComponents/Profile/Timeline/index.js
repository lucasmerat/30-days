import React, { Component } from "react";
import "./Timeline.css";
import TimelinePost from "../TimelinePost";
import API from "../../../../utils/API";

class Timeline extends Component {
  state = {
    posts: null
  };
  loadPosts = () => {
    API.getPosts(this.props.userId).then(posts => {
      this.setState({
        posts: posts.data
      });
    });
  };
  componentDidMount() {
    this.loadPosts();
  }
  render() {
    console.log(this.state.posts);
    return (
      <div className="row">
        <div className="timeline-card">
          <div className="with-margin-row">
            <div>
              {this.state.posts && this.state.posts.length > 0 ? (
                this.state.posts.map(post => {
                  return (
                    <TimelinePost
                      key={post._id}
                      username={post.user.username}
                      profilePicture={post.user.profile_picture}
                      challengeName={post.challenge.title}
                      postTitle={post.title}
                      createdAt={post.createdAt}
                      postBody={post.body}
                      postImage={post.image}
                      challengeId={post.challenge._id}
                    />
                  );
                })
              ) : (
                <div class="no-timeline-posts-msg">No timeline posts... join some workouts and start posting progress</div>
              )}
              <div className="card-body" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timeline;
