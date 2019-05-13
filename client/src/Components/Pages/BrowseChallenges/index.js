import React from "react";
import moment from "moment";
import "./style.css";
import ChallengeCard from "../ChallengeCard";

export default function BrowseChallenges({ challenges }) {
  console.log(challenges);
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
            />)
          } 
        })}
    </div>
  );
}

// I started a challenge on the 11th. 11+30 days is 41. today is the 13th.
// If Now > createdAt + 30 days (end date of challenge), it is completed
