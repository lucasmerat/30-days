import React from "react";
import moment from "moment";
import ChallengeCard from "../ChallengeCard";
import "./DoneChallenges.css";

export default function DoneChallegnes({ challenges }) {
  return (
    <div className="row">
      {challenges &&
      challenges.find(challenge =>
        moment(challenge.startDate)
          .add(31, "days")
          .isBefore(moment())
      ) ? (
        challenges.map(challenge => {
          let endDate = moment(challenge.startDate).add(31, "days");
          if (endDate.isBefore(moment())) {
            return (
              <ChallengeCard
                key={challenge._id}
                _id={challenge._id}
                title={challenge.title}
                description={challenge.description}
                numUsers={challenge.user.length}
                createdAt={challenge.createdAt}
                startDate={challenge.startDate}
                image={challenge.image}
                type="Done"
              />
            );
          } else return null;
        })
      ) : (
        <div className="no-done-workouts">
          You haven't completed any workouts yet.
        </div>
      )}
    </div>
  );
}
