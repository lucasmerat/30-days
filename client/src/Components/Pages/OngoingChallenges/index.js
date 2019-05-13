import React from 'react';
import moment from "moment";
import ChallengeCard from "../ChallengeCard";
import "./style.css";
import { FormBtn } from "../../UiComponents/Form";
export default function OngoingChallenges({challenges, user}) {
  return (
    <div className="row">
          {/* <div className="card browse-card" >
            <img src="https://images.vexels.com/media/users/3/138778/isolated/preview/cdd6b2f922a8bea7fb38b54b80a2dc65-fitness-woman-silhouette-stretching-legs-by-vexels.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title challenge-title">Core Challenge</h5>
                <p className="card-text challenge-text">Progress</p>
                <p className="card-text challenge-text progress-chart">
                <p className="card-text challenge-text fill-progress-chart"></p>
                </p>
                <p className="card-text challenge-text"># of challengers</p>
                <FormBtn href="#" className="btn btn-primary join-btn ">
                View Challenge</FormBtn>
            </div>
            <p className="card-text challenge-info">Ends:  | 10 Days Left <i class="fas fa-share-alt "></i></p>
          </div> */}
          {challenges &&
        challenges.map(challenge => {
          let endDate = moment(challenge.createdAt).add(30, "days");
          //Need to add logic to check that challenge belongs to user -- challenge.user === user
          if (endDate.isAfter(moment())) {
            return (<ChallengeCard
              key={challenge._id}
              _id={challenge._id}
              title={challenge.title}
              description={challenge.description}
              numUsers={challenge.user.length}
              createdAt={challenge.createdAt}
              type="Ongoing"
            />)
          } 
        })}
    </div>
   
  )
}
