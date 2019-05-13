import axios from "axios";

export default {
  // Create a challenges
  createChallenge: function(data) {
    return axios.post("/api/newChallenge",data);
  },
   // Get all challenges
  getChallenges: function() {
    return axios.get("/api/challenges");
  },
    // Get challenge by ID
  getChallengebyId: function(id) {
    return axios.get("/api/challenge/"+id);
  },
  // Get all users in a challenge
  getUsersInChallenge: function(id) {
    return axios.get("/api/challengeusers/" + id);
  },
  // Get all challenges from a user
  getChallengesFromUser: function(id) {
    return axios.get("/api/challenges/"+id);
  },
  // Add a user to a challenge
  addUserChallenge: function(id, data) {
    return axios.post("/api/addchallengeuser/"+id,data);
  },
  // Add a user to a challenge
  removeUserChallenge: function(id, data) {
    return axios.delete("/api/removechallengeuser/"+id,data);
  }

};
