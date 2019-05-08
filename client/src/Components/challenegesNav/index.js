import React from "react";
import "./style.css";
// import categories from "./categories.json";

function ChallengesNav() {
  return (
    <div className="row">
    <div className="col-4 left-nav"></div>
    <div className="col-8">
    <nav className=" navbar navbar-dark bg-dark ">
 
 <ul className="">
   <li className="nav-item active">
     <a className="nav-link" href="profile/browse">Browse Categories <span className="sr-only">(current)</span></a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="profile/ongoing">Ongoing Challenges</a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="profile/done">Done</a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="profile/timeline">Timeline</a>
   </li>
 </ul>

</nav>
    </div>
    </div>
   
  );
}

export default ChallengesNav;


