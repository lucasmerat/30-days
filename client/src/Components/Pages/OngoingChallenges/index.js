import React from 'react';
import moment from "moment";
import ChallengeCard from "../ChallengeCard";
import "./style.css";
import { FormBtn } from "../../UiComponents/Form";
export default function OngoingChallenges({challenges, user}) {
  return (
    <div className="row">
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
