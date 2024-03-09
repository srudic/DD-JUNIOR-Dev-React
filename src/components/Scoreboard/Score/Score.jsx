import { useState } from "react";
import styles from "./Score.module.css";

import TeamScore from "./TeamScore";

const Score = () => {
  const [homeTeamScore, setHomeTeamScore] = useState(0);
  const [guestTeamScore, setGuestTeamScore] = useState(0);

  const increaseHomeScore = () => {
    setHomeTeamScore(homeTeamScore + 1);
  };

  const decreaseHomeScore = () => {
    if (homeTeamScore > 0) {
      setHomeTeamScore(homeTeamScore - 1);
    }
  };

  const increaseGuestScore = () => {
    setGuestTeamScore(guestTeamScore + 1);
  };

  const decreaseGuestScore = () => {
    if (guestTeamScore > 0) {
      setGuestTeamScore(guestTeamScore - 1);
    }
  };

  return (
    <div className={styles.ScoreContainer}>
      <TeamScore
        teamStatus="HOME"
        score={homeTeamScore}
        increaseScore={increaseHomeScore}
        decreaseScore={decreaseHomeScore}
      />
      <div className={styles.TeamScore}>-</div>
      <TeamScore
        teamStatus="GUEST"
        score={guestTeamScore}
        increaseScore={increaseGuestScore}
        decreaseScore={decreaseGuestScore}
      />
    </div>
  );
};

export default Score;
