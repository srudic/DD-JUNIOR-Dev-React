import styles from "./StatisticsBoard.module.css";
import StatitsticsItem from "./StatisticsItem/StatisticsItem";

const StatisticsBoard = ({
  homeShots,
  guestShots,
  homeYellowCards,
  guestYellowCards,
  homeRedCards,
  guestRedCards,
}) => {
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
