import React from "react";
import "./vote.css"
export default function Vote({ voteScore, onVote, onUnVote }) {
  return (
    <div className="vote-area">
      <div onClick={onUnVote} className="unvote-btn"></div>
      <div className="score-section">
        <span className="score">{voteScore === 0 ? "min" : voteScore && voteScore === 10 ? "max" : voteScore}</span>
      </div>
      <div onClick={onVote} className="vote-btn" ></div>
    </div>
  );
}
