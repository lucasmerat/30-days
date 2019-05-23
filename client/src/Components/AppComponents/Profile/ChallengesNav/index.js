import React from "react";
import { NavLink} from "react-router-dom";
import "./style.css";
// import categories from "./categories.json";

function ChallengesNav() {
  return (
    <div className="row ">
    {/* <div className="col-3 left-nav"></div> */}
    <div className="col-12 right-nav">
    <nav className="navbar navbar-dark bg-dark ">
 
 <ul className="">
   <li className="nav-item active">
     <NavLink activeClassName="selectedLink" className="nav-link" to="/profile/browse/">Browse Challenges <span className="sr-only">(current)</span></NavLink>
   </li>
   <li className="nav-item">
     <NavLink activeClassName="selectedLink" className="nav-link" to="/profile/ongoing">Ongoing Challenges</NavLink>
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


