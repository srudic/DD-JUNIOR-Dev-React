import styles from "./StatisticsItem.module.css";

import Button from "../../UI/Button";

const StatitsticsItem = ({
  title,
  homeNumber,
  guestNumber,
  increaseHomeStatistic,
  decreaseHomeStatistic,
  increaseGuestStatistic,
  decreaseGuestStatistic,
}) => {
  return (
    <div className={styles.StatisticsItem}>
      <div className={styles.Number}>
        <Button buttonStyle={styles.Button} onClick={decreaseHomeStatistic}>
          -
        </Button>
        <p>{homeNumber}</p>
        <Button buttonStyle={styles.Button} onClick={increaseHomeStatistic}>
          +
        </Button>
      </div>
      <div>{title}</div>
      <div className={styles.Number}>
        <Button buttonStyle={styles.Button} onClick={decreaseGuestStatistic}>
          -
        </Button>
        <p>{guestNumber}</p>
        <Button buttonStyle={styles.Button} onClick={increaseGuestStatistic}>
          +
        </Button>
      </div>
    </div>
  );
};

export default StatitsticsItem;
