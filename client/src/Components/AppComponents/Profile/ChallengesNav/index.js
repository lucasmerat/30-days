import React from "react";
import { NavLink} from "react-router-dom";
import "./style.css";
// import categories from "./categories.json";

function ChallengesNav() {
  return (
    <div className="row nav-bar">
    {/* <div className="col-3 left-nav"></div> */}
    <div className="col-12 right-nav">
    <nav className="navbar navbar-dark bg-dark ">
 
 <ul className="nav-list">
   <li className="nav-item active">
     <NavLink activeClassName="selectedLink" className="nav-link" to="/profile/browse/">Browse Workouts <span className="sr-only">(current)</span></NavLink>
   </li>
   <li className="nav-item">
     <NavLink activeClassName="selectedLink" className="nav-link" to="/profile/ongoing">Ongoing Workouts</NavLink>
   </li>
   <li className="nav-item">
     <NavLink activeClassName="selectedLink" className="nav-link" to="/profile/done">Done</NavLink>
   </li>
   <li className="nav-item">
     <NavLink activeClassName="selectedLink" className="nav-link" to="/profile/timeline">Timeline</NavLink>
   </li>
 </ul>

</nav>
    </div>
    </div>
   
  );
}

export default ChallengesNav;


