import moment from "moment";

import styles from "./Date.module.css";

const Date = () => {
  const currentDate = moment();

  return (
    <div className={styles.Date}>
      <p>{currentDate.format("MM/DD/YYYY")}</p>
    </div>
  );
};

export default Date;
