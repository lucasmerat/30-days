import React from "react";
import { NavLink } from "react-router-dom";
import "./ChallengesNav.css";

function ChallengesNav() {
  return (
    <div className="row nav-bar">
      <div className="col-12 right-nav">
        <nav className="navbar navbar-dark bg-dark challenge-nav">
          <ul className="nav-list">
            <li className="nav-item active">
              <NavLink
                activeClassName="selectedLink"
                className="nav-link"
                to="/profile/browse/"
              >
                <i className="far fa-window-restore" /> Browse Workouts{" "}
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="selectedLink"
                className="nav-link"
                to="/profile/ongoing"
              >
                <i className="fas fa-tasks" /> Ongoing Workouts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="selectedLink"
                className="nav-link"
                to="/profile/done"
              >
                <i className="fas fa-check" /> Done
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="selectedLink"
                className="nav-link"
                to="/profile/timeline"
              >
                <i className="fas fa-list-ul" /> Timeline
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ChallengesNav;
