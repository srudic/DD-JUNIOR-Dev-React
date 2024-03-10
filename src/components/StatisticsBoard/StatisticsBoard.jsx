import { useState } from "react";
import styles from "./StatisticsBoard.module.css";
import StatitsticsItem from "./StatisticsItem/StatisticsItem";

// Custom hook for managing statistics
const useStatistic = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return { value, increase, decrease };
};

const StatisticsBoard = () => {
  // Use custom hook for each statistic
  const homeShots = useStatistic(0);
  const guestShots = useStatistic(0);
  const homeYellowCards = useStatistic(0);
  const guestYellowCards = useStatistic(0);
  const homeRedCards = useStatistic(0);
  const guestRedCards = useStatistic(0);

  return (
    <div className={styles.BoardContainer}>
      <h2 className={styles.MainTitle}>Statistics</h2>
      <StatitsticsItem
        title="SHOTS"
        homeNumber={homeShots.value}
        guestNumber={guestShots.value}
        increaseHomeStatistic={homeShots.increase}
        decreaseHomeStatistic={homeShots.decrease}
        increaseGuestStatistic={guestShots.increase}
        decreaseGuestStatistic={guestShots.decrease}
      />
      <StatitsticsItem
        title="YELLOW CARDS"
        homeNumber={homeYellowCards.value}
        guestNumber={guestYellowCards.value}
        increaseHomeStatistic={homeYellowCards.increase}
        decreaseHomeStatistic={homeYellowCards.decrease}
        increaseGuestStatistic={guestYellowCards.increase}
        decreaseGuestStatistic={guestYellowCards.decrease}
      />
      <StatitsticsItem
        title="RED CARDS"
        homeNumber={homeRedCards.value}
        guestNumber={guestRedCards.value}
        increaseHomeStatistic={homeRedCards.increase}
        decreaseHomeStatistic={homeRedCards.decrease}
        increaseGuestStatistic={guestRedCards.increase}
        decreaseGuestStatistic={guestRedCards.decrease}
      />
    </div>
  );
};

export default StatisticsBoard;
