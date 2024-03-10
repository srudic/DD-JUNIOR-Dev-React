import styles from "./Scoreboard.module.css";

import Score from "./Score/Score";
import Team from "./Team/Team";
import ScoreboardControls from "./ScoreboardControls/ScoreboardControls";

import LPALogo from "../../assets/LPA.png";
import BarcelonaLogo from "../../assets/Barcelona.png";

const Scoreboard = () => {
  return (
    <div className={styles.ScoreboardContainer}>
      <ScoreboardControls />
      <div className={styles.TeamsANDScore}>
        <Team teamName="LPA" logoUrl={LPALogo} />
        <Score />
        <Team teamName="Barcelona" logoUrl={BarcelonaLogo} />
      </div>
    </div>
  );
};

export default Scoreboard;
