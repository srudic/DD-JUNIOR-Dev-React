import Button from "../../UI/Button";
import Date from "./Date/Date";
import Stopwatch from "./Stopwatch/Stopwatch";

import styles from "./ScoreboardControls.module.css";

const ScoreboardControls = ({ stopwatch, handleReset }) => {
  return (
    <>
      <div className={styles.ScoreboardControlsContainer}>
        <Button buttonStyle={styles.Button} onClick={stopwatch.start}>
          Start
        </Button>
        <Button buttonStyle={styles.Button} onClick={stopwatch.pause}>
          Pause
        </Button>
        <Button buttonStyle={styles.Button} onClick={handleReset}>
          Reset
        </Button>
      </div>
      <Date />
      <Stopwatch seconds={stopwatch.seconds} minutes={stopwatch.minutes} />
    </>
  );
};

export default ScoreboardControls;
