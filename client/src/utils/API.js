import axios from "axios";

export default {
  // Get User
  getUser: function(id) {
    return axios.get("/api/user/"+id);
  },
  // Create a challenge
  createChallenge: function(data) {
    return axios.post("/api/newChallenge",data);
  },
   // Delete a challenge
  deleteChallenge: function(_id) {
    return axios.delete("/api/deleteChallenge/"+_id);
  },
   // Get all challenges not belonging to a user
  getChallenges: function(_id) {
    return axios.get("/api/notchallenges/"+_id);
  },
    // Get challenge by ID
  getChallengebyId: function(id) {
    return axios.get("/api/challenge/"+id);
  },
  // Get all users in a challenge
  getUsersInChallenge: function(id) {
    return axios.get("/api/challengeusers/" + id);
  },
  // Get all challenges a user belongs to
  getChallengesFromUser: function(id) {
    return axios.get("/api/challenges/"+id);
  },
  // Add a user to a challenge
  addUserChallenge: function(id, data) {
    return axios.post("/api/addchallengeuser/"+id,data);
  },
  //Remove a user from a challenge
  removeUserChallenge: function(id, data) {
    return axios.delete("/api/removechallengeuser/"+id,data);
  },
  //Create a post
  createPost: function(data){
    return axios.post("/api/newpost",data);
  },
  //Return all the posts related to the challenges that the user is in.
  getPosts:function(userId){
    return axios.get("/api/challengeposts/"+userId)
  },
  //Like a post
  likePost:function(postId,userId){
    return axios.post(`/api/likePost/${postId}/${userId}`)
  }
  ,
  //Like a post
  unlikePost:function(postId,userId){
    return axios.post(`/api/unlikePost/${postId}/${userId}`)
  }

};
