import "./App.css";

import { useState } from "react";

import { useStopwatch } from "react-timer-hook";

import Scoreboard from "./components/Scoreboard/Scoreboard";
import StatisticsBoard from "./components/StatisticsBoard/StatisticsBoard";

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

  const reset = (resetValue = 0) => {
    setValue(resetValue);
  };

  return { value, increase, decrease, reset };
};

function App() {
  const stopwatch = useStopwatch({
    autoStart: false,
  });

  // Use custom hook for each statistic
  const homeTeamScore = useStatistic(0);
  const guestTeamScore = useStatistic(0);
  const homeShots = useStatistic(0);
  const guestShots = useStatistic(0);
  const homeYellowCards = useStatistic(0);
  const guestYellowCards = useStatistic(0);
  const homeRedCards = useStatistic(0);
  const guestRedCards = useStatistic(0);

  const handleReset = () => {
    stopwatch.reset(0, false); // Reset the stopwatch to 0 and prevent auto-start
    homeTeamScore.reset();
    guestTeamScore.reset();
    homeShots.reset();
    guestShots.reset();
    homeYellowCards.reset();
    guestYellowCards.reset();
    homeRedCards.reset();
    guestRedCards.reset();
  };

  return (
    <div className="App">
      <Scoreboard
        stopwatch={stopwatch}
        handleReset={handleReset}
        homeTeamScore={homeTeamScore.value}
        guestTeamScore={guestTeamScore.value}
        increaseHomeScore={homeTeamScore.increase}
        decreaseHomeScore={homeTeamScore.decrease}
        increaseGuestScore={guestTeamScore.increase}
        decreaseGuestScore={guestTeamScore.decrease}
      />
      <StatisticsBoard
        homeShots={homeShots}
        guestShots={guestShots}
        homeYellowCards={homeYellowCards}
        guestYellowCards={guestYellowCards}
        homeRedCards={homeRedCards}
        guestRedCards={guestRedCards}
      />
    </div>
  );
}

export default App;
