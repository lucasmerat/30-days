import React from 'react';
import moment from "moment";
import ChallengeCard from "../ChallengeCard";
import "./style.css";
import { FormBtn } from "../../UiComponents/Form";
export default function OngoingChallenges({challenges, user}) {
  console.log(challenges)
  return (
    <div className="row">
          {challenges &&
            challenges.map(challenge => {
          let endDate = moment(challenge.createdAt).add(30, "days");
          if (endDate.isAfter(moment())) {
            return (<ChallengeCard
              key={challenge._id}
              _id={challenge._id}
              title={challenge.title}
              description={challenge.description}
              numUsers={challenge.user.length}
              createdAt={challenge.createdAt}
              image={challenge.image}
              type="Ongoing"
            />)
          } 
        })}
    </div>
   
  )
}
