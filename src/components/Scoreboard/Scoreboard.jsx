import styles from "./Scoreboard.module.css";

import TeamScore from "./Score/TeamScore";
import Team from "./Team/Team";
import ScoreboardControls from "./ScoreboardControls/ScoreboardControls";

import LPALogo from "../../assets/LPA.png";
import BarcelonaLogo from "../../assets/Barcelona.png";

const Scoreboard = ({
  stopwatch,
  handleReset,
  homeTeamScore,
  guestTeamScore,
  increaseHomeScore,
  decreaseHomeScore,
  increaseGuestScore,
  decreaseGuestScore,
}) => {
  return (
    <div className={styles.ScoreboardContainer}>
      <ScoreboardControls stopwatch={stopwatch} handleReset={handleReset} />
      <div className={styles.TeamsANDScore}>
        <Team teamName="LPA" logoUrl={LPALogo} />
        <div className={styles.ScoreContainer}>
          <TeamScore
            teamStatus="HOME"
            score={homeTeamScore}
            increaseScore={increaseHomeScore}
            decreaseScore={decreaseHomeScore}
          />
          <div className={styles.Dash}>-</div>
          <TeamScore
            teamStatus="GUEST"
            score={guestTeamScore}
            increaseScore={increaseGuestScore}
            decreaseScore={decreaseGuestScore}
          />
        </div>
        <Team teamName="Barcelona" logoUrl={BarcelonaLogo} />
      </div>
    </div>
  );
};

export default Scoreboard;
