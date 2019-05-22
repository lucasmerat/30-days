import React from "react";
import moment from "moment";
import "./BrowseChallenges.css";
import ChallengeCard from "../ChallengeCard";

export default function BrowseChallenges({
  challenges,
  userId,
  loadChallenges,
  joinChallenge
}) {
  return (
    <div className="row">
      {challenges && challenges.length > 0 ? (
        challenges.map(challenge => {
          let firstDate = moment(challenge.startDate);
          let endDate = moment(challenge.startDate).add(30, "days");
          if (endDate.isAfter(moment()) && firstDate.isAfter(moment())) {
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
                startDate={challenge.startDate}
                type="Browse"
              />
            );
          } else return null;
        })
      ) : (
        <div>No Challenges available</div>
      )}
    </div>
  );
}
