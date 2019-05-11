import React from "react";
import "./style.css";
import ChallengeCard from "../ChallengeCard"

export default function BrowseChallenges({ challenges }) {
  return (
    challenges &&
    challenges.map(challenge => {
      return (
        <ChallengeCard key={challenge.id} title={challenge.title} description={challenge.description} numUsers={challenge.user.length} />
      );
    })
  );
}
