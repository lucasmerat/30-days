import React from "react";
import "./style.css";
import CategoryCard from "../CategoryCard";
import ChallengesNav from "../challenegesNav";
import ProfileNav from "../ProfileNav";
function profile(props) {
    return (
      <div>
          
              <ChallengesNav></ChallengesNav>
              <ProfileNav></ProfileNav> 
              <div className="row">
              <div className="col-4"></div>
              <div className="col-8">
              <CategoryCard></CategoryCard>
              </div>
              </div>
              

      </div>
      
    );
  }
  
  export default profile;
  
  