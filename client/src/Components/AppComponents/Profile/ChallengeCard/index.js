import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { FormBtn } from "../../../BootstrapComponents/Form";
import { ProgressBar } from "react-bootstrap";
import "./ChallengeCard.css";

export default function ChallengeCard(props) {
  const now = moment();
  const start = moment(props.startDate)
  const daysApt = now.diff(start, 'days');
  if (props.type === "Browse") {
    return (
      <div className="card browse-card">
        <img src={props.image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <Link to={`/profile/challenge/${props._id}`}>
            <h5 className="card-title challenge-card-title">{props.title}</h5>
          </Link>
          <p className="card-text challenge-text">{props.description}</p>
          <p className="card-text challenge-text">
            {props.numUsers} active athletes
          </p>
          <FormBtn
            onClick={() => {
              props.joinChallenge(props._id, { userId: props.userId });
            }}
            href="#"
            className="btn btn-primary join-btn "
          >
            Join Workout
          </FormBtn>
        </div>
        <p className="card-text challenge-info">
          Start Date: {moment(props.startDate).format("MM/DD/YYYY")}
          {/* <i className="fas fa-share-alt " /> */}
        </p>
      </div>
    );
  } else if (props.type === "Ongoing") {
    return (
      <div className="card browse-card">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={`/profile/challenge/${props._id}`}>
            <h5 className="card-title challenge-card-title">{props.title}</h5>
          </Link>
          <p className="card-text challenge-text">Progress</p>
          <ProgressBar now={daysApt / 30 * 100} variant={"danger"} />
          <p className="card-text challenge-text">
            {props.numUsers} active athletes
          </p>
          <Link to={`/profile/challenge/${props._id}`}>
            <FormBtn href="#" className="btn btn-primary join-btn ">
              View workout
            </FormBtn>
          </Link>
        </div>
        <p className="card-text challenge-info">
          Ends:{" "}
          {moment(props.startDate)
            .add(30, "d")
            .format("MM/DD/YYYY")}
          {/* <i className="fas fa-share-alt " /> */}
        </p>
      </div>
    );
  } else if (props.type === "Done") {
    return (
      <div className="card browse-card ">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={`/profile/challenge/${props._id}`}>
            <h5 className="card-title challenge-card-title">{props.title}</h5>
          </Link>
          <p className="card-text challenge-text">
            {props.numUsers} finished athletes
          </p>
          <Link to={`/profile/challenge/${props._id}`}>
            <FormBtn href="#" className="btn btn-primary join-btn ">
              View workout
            </FormBtn>
          </Link>
        </div>
        <p className="card-text challenge-info">
          Ended:{" "}
          {moment(props.startDate)
            .add(30, "d")
            .format("MM/DD/YYYY")}{" "}
          <i className="fas fa-share-alt " />
        </p>{" "}
      </div>
    );
  }
}
