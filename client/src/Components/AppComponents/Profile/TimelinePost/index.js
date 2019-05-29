import React,{Component} from "react";
import API from "../../../../utils/API";
import moment from "moment";
import { FormBtn} from "../../../BootstrapComponents/Form/";
import { Link } from "react-router-dom";
import "./TimelinePost.css";

class TimelinePost extends Component{
state={
  liked:false
}
likePost = (postId) => {
  API.likePost(postId,this.props.userId).then(posts => {
    this.setState({liked:true});
    this.props.loadPosts();
  })
};
unlikePost = (postId) => {
  API.unlikePost(postId,this.props.userId).then(posts => {
    this.setState({liked:false});
    this.props.loadPosts();
  })
}
likeUpdate = () => {
  this.props.userLikes.map(likes=>{
    if (likes.username===this.props.username){
      this.setState({liked:true});
    }
    return null;
  })
}
componentDidMount(){
  this.likeUpdate()
}

 render(){
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
                  src={this.props.profilePicture}
                  alt=""
                />
              </div>
              <div className="ml-2">
                <div className="h5 m-0">{this.props.username}</div>
                <div className="h5 m-0">
                  From workout:{" "}
                  <Link
                    className="workout-link"
                    to={`/profile/challenge/${this.props.challengeId}`}
                  >
                    {" "}
                    {this.props.challengeName}
                  </Link>
                  <p className="time-posted">{moment(this.props.createdAt).calendar()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body post-content">
          <h4 className="card-title card-title-post">Posted on Day {this.props.postDay}</h4>
          <h5 className="card-text card-text-post my-3 post-body">{this.props.postBody}</h5>
          {this.props.postImage ? (<img className="img-fluid" src={this.props.postImage} alt="" />): (null)}
       
        </div>
        <div className="card-footer">
            {
              this.state.liked===false?<FormBtn className="edit-profile-btn" onClick={()=>{this.likePost(this.props.postId)}}>Like</FormBtn>:<FormBtn key={Math.random()}className="edit-profile-btn" onClick={()=>{this.unlikePost(this.props.postId)}}>Unlike</FormBtn>
            }
          <span> {this.props.likes}  {this.props.likes===1?"like":"likes"}</span>
        </div>
      </div>
    </div>
  );
}
}

export default TimelinePost;
