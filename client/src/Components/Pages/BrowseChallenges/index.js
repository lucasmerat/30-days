import React from "react";
import moment from "moment";
import "./style.css";
import ChallengeCard from "../ChallengeCard";
import API from "../../../utils/API";

export default function BrowseChallenges({ challenges, userId }) {
  const joinChallenge = (challengeId, userId) =>{
    API.addUserChallenge(challengeId, userId).then((result)=>{
      console.log(result, "Now we need to refresh the browse challenges to reflect the challenge we joined being gone")
    })
  }
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
              joinChallenge= {joinChallenge}
              userId={userId}
              type="Browse"
            />)
          } 
        })}
    </div>
  );
}
