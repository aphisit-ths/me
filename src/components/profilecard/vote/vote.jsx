import React from "react";
import "./vote.css"
export default function Vote({ vote, onVote, onUnVote }) {
  return (
    <div className="vote-area">
      <div onClick={onUnVote} className="unvote-btn" ></div>
      {/* <span className="unvote-button" onClick={onUnVote}>
        Unvote -  
      </span> */}
      <div className="score-section">
        <span className="score">{vote === 0 ? "min" : vote && vote === 10 ? "max" : vote}</span>
      </div>
      <div onClick={onVote} className="vote-btn" ></div>
      {/* <span className="vote-button" onClick={onVote}>
        Vote+
      </span> */}
      
    </div>
  );
}
