import React from "react";
import {Link} from "react-router-dom";
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
     <Link className="nav-link" to="/profile/browse">Browse Challenges <span className="sr-only">(current)</span></Link>
   </li>
   <li className="nav-item">
     <Link className="nav-link" to="/profile/ongoing">Ongoing Challenges</Link>
   </li>
   <li className="nav-item">
     <Link className="nav-link" to="/profile/done">Done</Link>
   </li>
   <li className="nav-item">
     <Link className="nav-link" to="/profile/timeline">Timeline</Link>
   </li>
 </ul>

</nav>
    </div>
    </div>
   
  );
}

export default ChallengesNav;


