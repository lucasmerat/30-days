import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import "./ChallengeCard.css";

const ChallengeCard = ({
  startDate,
  type,
  _id,
  title,
  image,
  description,
  numUsers,
  joinChallenge,
  userId
}) => {
  const now = moment();
  const start = moment(startDate);
  const daysApt = now.diff(start, "days");
  if (type === "Browse") {
    return (
      <div className="card challenge-card browse-card col-md-3 col-s-12">
        <div className="challenge-card-body">
          <Link to={`/profile/challenge/${_id}`}>
            <h5 className="card-title challenge-card-title">{title}</h5>
          </Link>
        </div>
        <img src={image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body challenge-detail-body">
          <p className="card-text challenge-text">{description}</p>
          <p className="card-text challenge-text active-athletes">
            {numUsers} active athletes
          </p>
          <input
            onClick={() => {
              joinChallenge(_id, { userId: userId });
            }}
            href="#"
            className="btn btn-success join-btn"
            value="Join Workout"
          />

        </div>
        <p className="card-text challenge-info">
          Start Date: {moment(startDate).format("MM/DD/YYYY")}
        </p>
      </div>
    );
  } else if (type === "Ongoing") {
    return (
      <div className="card challenge-card browse-card col-md-3 col-s-12">
        <div className="challenge-card-body">
          <Link to={`/profile/challenge/${_id}`}>
            <h5 className="card-title challenge-card-title">{title}</h5>
          </Link>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body challenge-detail-body">
            <p className="card-text challenge-text">Progress</p>
            <ProgressBar now={(daysApt / 30) * 100} variant={"danger"} />

            <p className="card-text challenge-text active-athletes">
              {numUsers} active athletes
            </p>
            <Link to={`/profile/challenge/${_id}`}>
              <input
                href="#"
                className="btn btn-success join-btn"
                value="View Workout"
              />
            </Link>
            <p className="card-text challenge-info">
              Ends:{" "}
              {moment(startDate)
                .add(30, "d")
                .format("MM/DD/YYYY")}
            </p>
          </div>
        </div>
      </div>
    );
  } else if (type === "Done") {
    return (
      <div className="card challenge-card browse-card col-md-3 col-s-12">
        <div className="card-body challenge-card-body">
          <Link to={`/profile/challenge/${_id}`}>
            <h5 className="card-title challenge-card-title">{title}</h5>
          </Link>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body challenge-detail-body">
            <p className="card-text challenge-text active-athletes">
              {numUsers} finished athletes
            </p>
            <Link to={`/profile/challenge/${_id}`}>
            <input
                href="#"
                className="btn btn-success join-btn"
                value="View Workout"
              />
            </Link>
          </div>
          <p className="card-text challenge-info">
            Ended:{" "}
            {moment(startDate)
              .add(29, "d")
              .format("MM/DD/YYYY")}{" "}
          </p>{" "}
        </div>
      </div>
    );
  }
};

export default ChallengeCard;
