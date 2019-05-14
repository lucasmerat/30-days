import React from "react";
import moment from "moment";
import ChallengeCard from "../ChallengeCard";
import "./DoneChallenges.css";

export default function DoneChallegnes({ userChallenges }) {
  console.log(userChallenges)
  return (
    <div className="row">
      {userChallenges &&
        userChallenges.map(challenge => {
          let endDate = moment(challenge.createdAt).add(30, "days");
          if (endDate.isBefore(moment())) {
            return (
              <ChallengeCard
                key={challenge._id}
                _id={challenge._id}
                title={challenge.title}
                description={challenge.description}
                numUsers={challenge.user.length}
                createdAt={challenge.createdAt}
                image={challenge.image}
                type="Done"
              />
            );
          }
        })}
    </div>
  );
}
