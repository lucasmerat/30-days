import React from "react";
import "./Timeline.css";
import TimelinePost from "../Timeline";

export default function Timeline() {
  return (
    <div className="row">
      <div className="card timeline-card">
        <div className="card-body">
          <h5 className="card-title timeline-title">Timeline</h5>
            <TimelinePost />
          <div className="card-body" />
        </div>
      </div>
    </div>
  );
}
