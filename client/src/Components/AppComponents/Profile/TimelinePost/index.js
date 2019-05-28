import React,{Component} from "react";
import { FormBtn} from "../../../BootstrapComponents/Form/";
import { Link } from "react-router-dom";
import "./TimelinePost.css";
import moment from "moment";
import API from "../../../../utils/API";


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
};

 render(){
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
                  src={this.props.profilePicture}
                  alt=""
                />
              </div>
              <div className="ml-2">
                <div className="h5 m-0">{this.props.username}</div>
                <div className="h5 m-0">From workout: <Link className="workout-link" to={`/profile/challenge/${this.props.challengeId}`}> {this.props.challengeName}</Link></div> 
              </div>
            </div>
          </div>
        </div>
        <div className="card-body post-body">
          <div className="text-white h7 card-date-post mb-2">
            {" "}
            <i className="fa fa-clock-o" />{moment(this.props.createdAt).calendar()}
          </div>
          <h5 className="card-title card-title-post">
            {this.props.postTitle}
          </h5>
          <img className="img-fluid" src={this.props.postImage} alt="" />

          <p className="card-text card-text-post my-2">
            {this.props.postBody}
          </p>
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
