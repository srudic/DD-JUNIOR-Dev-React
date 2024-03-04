import styles from "./Navigation.module.css";

import { NAVIGATION_CONSTANTS } from "../../UI/Constants";

function smoothScroll(id) {
  document.querySelector(`#${id}`).scrollIntoView({
    behavior: "smooth",
  });
}

const Navigation = () => {
  return (
    <div className={styles.NavigationContainer}>
      <div className={styles.Navigation}>
        {NAVIGATION_CONSTANTS.map((tab) => (
          <div
            key={tab.title}
            className={styles.Title}
            onClick={() => {
              smoothScroll(tab.id);
            }}
          >
            {tab.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
