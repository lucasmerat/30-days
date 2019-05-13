import React from "react";
import "./style.css";
import ChallengeCard from "../ChallengeCard"

export default function BrowseChallenges({ challenges }) {
  console.log(challenges)
  return (
    challenges &&
    challenges.map(challenge => {
      return (
        <ChallengeCard key={challenge._id} title={challenge.title} description={challenge.description} numUsers={challenge.user.length} />
      );
    })
  );
}
