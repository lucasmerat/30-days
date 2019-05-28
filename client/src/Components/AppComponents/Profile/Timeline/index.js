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
    return (
      <div className="row">
        <div className="timeline-card">
          <div className="timeline-with-margin-row">
              {this.state.posts && this.state.posts.length > 0 ? (
                this.state.posts.map(post => {
                  return (
                    <TimelinePost
                      key={post._id}
                      postId ={post._id}
                      username={post.user.username}
                      profilePicture={post.user.profile_picture}
                      challengeName={post.challenge.title}
                      createdAt={post.createdAt}
                      postDay={post.postDay}
                      likes={post.likes.length}
                      userLikes={post.likes}
                      postBody={post.body}
                      postImage={post.image}
                      challengeId={post.challenge._id}
                      loadPosts={this.loadPosts}
                      userId={this.props.userId}

                    />
                  );
                })
              ) : (
                <div className="no-timeline-posts-msg">No timeline posts... join some workouts and start posting progress</div>
              )}
              <div className="card-body" />
            </div>
        </div>
      </div>
    );
  }
}

export default Timeline;
