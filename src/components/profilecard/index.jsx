import React, { useState } from "react";
import Vote from "./vote/vote";
import "./profilecard.css";
export default function ProfileCard({ info }) {
  const [vote, setVote] = useState(0);

  //ฟังชั่นสหรับการเพิ่มคะแนน vote
  function onVote() {
    if (vote >= 10) {
      alert("max");
    } else {
      setVote(vote + 1);
    }
  }
  //ฟังชั่นสหรับการลดคะแนน vote
  function onUnVote() {
    if (vote <= 0) {
      alert("min");
    } else {
      setVote(vote - 1);
    }
  }

  //ฟังชั่นสำหรับการ reset คะแนน vote
  function resetVoteScore() {
    setVote(0);
  }

  return (
    <div className="card-area">
      <div className="info">
        <div className="info-section">
          <h1>
          {info.id}
          </h1>
          <h1>
            {info.name} 
          </h1>
          <h2>Hi there👋 ,</h2>
          <p>{info.desc}</p>
        </div>
        <div className="vote-section">
          <Vote vote={vote} onVote={onVote} onUnVote={onUnVote} />
        </div>
      </div>
      <div className="image">
        <div className="image-warpper">
          <img src={info.img} alt="" />
        </div>
      </div>
    </div>
  );
}
