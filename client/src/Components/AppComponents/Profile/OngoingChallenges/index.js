import React from "react";
import moment from "moment";
import ChallengeCard from "../ChallengeCard";
import "./style.css";
// import { FormBtn } from "../../UiComponents/Form";
export default function OngoingChallenges({ challenges, user }) {
  return (
    <div className="row">
      <div className="with-margin-row">
        {challenges && challenges.length > 0 ? (
          challenges.map(challenge => {
            let endDate = moment(challenge.startDate).add(31, "days");
            if (endDate.isAfter(moment())) {
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
                  type="Ongoing"
                />
              );
            } else return null;
          })
        ) : (
          <div class="no-ongoing-workouts-msg">You have no active workouts... join one!</div>
        )}
      </div>
    </div>
  );
}
