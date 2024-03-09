import Button from "../../UI/Button";

import styles from "./ScoreboardControls.module.css";

const ScoreboardControls = () => {
  return (
    <div className={styles.ScoreboardControlsContainer}>
      <Button buttonStyle={styles.Button}>Start</Button>
      <Button buttonStyle={styles.Button}>Reset</Button>
    </div>
  );
};

export default ScoreboardControls;
