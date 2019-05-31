import React from "react";
import moment from "moment";
import "./BrowseChallenges.css";
import ChallengeCard from "../ChallengeCard";

const BrowseChallenges = ({ challenges, userId, joinChallenge }) => {
  return (
    <div className="row">
      <div className="with-margin-row row">
        {challenges &&
        challenges.find(challenge =>
          moment(challenge.startDate)
            .add(1, "days")
            .isAfter(moment())
        ) ? (
          challenges.map(challenge => {
            let firstDate = moment(challenge.startDate).add(1, "days");
            let endDate = moment(challenge.startDate).add(31, "days");
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
          <div className="no-challenges">
            No workouts available to join... try creating one
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseChallenges;
