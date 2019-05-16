import React from "react";
import moment from "moment";
import "./BrowseChallenges.css";
import ChallengeCard from "../ChallengeCard";

export default function BrowseChallenges({ challenges, userId, loadChallenges, joinChallenge }) {
  return (
    <div className="row">
      {challenges &&
        challenges.map(challenge => {
          let endDate = moment(challenge.createdAt).add(30, "days");
          if (endDate.isAfter(moment())) {
            return (
              <ChallengeCard
                key={challenge._id}
                _id={challenge._id}
                title={challenge.title}
                description={challenge.description}
                numUsers={challenge.user.length}
                createdAt={challenge.createdAt}
                image={challenge.image}
                joinChallenge={joinChallenge}
                userId={userId}
                type="Browse"
              />
            );
          }
        })}
    </div>
  );
}