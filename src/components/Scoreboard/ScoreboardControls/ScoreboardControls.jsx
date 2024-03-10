import { useStopwatch } from "react-timer-hook";

import Button from "../../UI/Button";
import Date from "../Date/Date";
import Stopwatch from "../Stopwatch/Stopwatch";

import styles from "./ScoreboardControls.module.css";

const ScoreboardControls = () => {
  const { seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false,
  });
  return (
    <>
      <div className={styles.ScoreboardControlsContainer}>
        <Button buttonStyle={styles.Button} onClick={start}>
          Start
        </Button>
        <Button buttonStyle={styles.Button} onClick={pause}>
          Pause
        </Button>
        <Button buttonStyle={styles.Button} onClick={reset}>
          Reset
        </Button>
      </div>
      <Date />
      <Stopwatch seconds={seconds} minutes={minutes} />
    </>
  );
};

export default ScoreboardControls;
