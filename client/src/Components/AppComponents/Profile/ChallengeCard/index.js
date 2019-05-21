import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { FormBtn } from "../../../BootstrapComponents/Form";

export default function ChallengeCard(props) {
  if (props.type === "Browse") {
    return (
      <div className="card browse-card">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={`/profile/challenge/${props._id}`}>
            <h5 className="card-title challenge-title">{props.title}</h5>
          </Link>
          <p className="card-text challenge-text">{props.description}</p>
          <p className="card-text challenge-text">
            {props.numUsers} active challengers
          </p>
          <FormBtn
            onClick={() => {
              props.joinChallenge(props._id, { userId: props.userId });
            }}
            href="#"
            className="btn btn-primary join-btn "
          >
            Join Challenge
          </FormBtn>
        </div>
        <p className="card-text challenge-info">
          Starts: | 30 Days <i className="fas fa-share-alt " />
        </p>
      </div>
    );
  } else if (props.type === "Ongoing") {
    return (
      <div className="card browse-card">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={`/profile/challenge/${props._id}`}>
            <h5 className="card-title challenge-title">{props.title}</h5>
          </Link>
          <p className="card-text challenge-text">Progress</p>
          <div className="card-text challenge-text progress-chart">
            <p className="card-text challenge-text fill-progress-chart" />
          </div>
          <p className="card-text challenge-text">
            {props.numUsers} active challengers
          </p>
          <Link to={`/profile/challenge/${props._id}`}>
            <FormBtn href="#" className="btn btn-primary join-btn ">
              View Challenge
            </FormBtn>
          </Link>
        </div>
        <p className="card-text challenge-info">
          Ends:{" "}
          {moment(props.createdAt)
            .add(30, "d")
            .calendar()}{" "}
          <i className="fas fa-share-alt " />
        </p>{" "}
      </div>
    );
  } else if (props.type === "Done") {
    return (
      <div className="card browse-card">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={`/profile/challenge/${props._id}`}>
            <h5 className="card-title challenge-title">{props.title}</h5>
          </Link>
          <p className="card-text challenge-text">
            {props.numUsers} finished challengers
          </p>
          <Link to={`/profile/challenge/${props._id}`}>
            <FormBtn href="#" className="btn btn-primary join-btn ">
              View Challenge
            </FormBtn>
          </Link>
        </div>
        <p className="card-text challenge-info">
          Ends: Finished <i className="fas fa-share-alt " />
        </p>{" "}
      </div>
    );
  }
}
