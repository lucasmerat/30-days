import React from "react";
import "./style.css";
import CategoryCard from "../CategoryCard";
import ChallengesNav from "../ChallengesNav";
import ProfileNav from "../ProfileNav";
function profile(props) {
  return (
    <div>
      <ChallengesNav />
      <ProfileNav />
      <div className="row">
        <div className="col-4" />
        <div className="col-8">
          <CategoryCard />
        </div>
      </div>
    </div>
  );
}

export default profile;
