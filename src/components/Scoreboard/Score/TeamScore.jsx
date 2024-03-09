import styles from "./Score.module.css";

import Button from "../../UI/Button";

const TeamScore = ({ teamStatus, score, increaseScore, decreaseScore }) => {
  return (
    <div className={styles.TeamContainer}>
      <p className={styles.TeamName}>{teamStatus}</p>
      <p className={styles.TeamScore}>{score}</p>
      <div className={styles.ButtonContainer}>
        <Button buttonStyle={styles.Button} onClick={increaseScore}>
          +
        </Button>
        <Button buttonStyle={styles.Button} onClick={decreaseScore}>
          -
        </Button>
      </div>
    </div>
  );
};

export default TeamScore;
