import { useState, useEffect, useRef } from "react";
import styles from "./Navigation.module.css";
import { NAVIGATION_CONSTANTS } from "../../UI/Constants";
import { FaBars } from "react-icons/fa";

function smoothScroll(id) {
  document.querySelector(`#${id}`).scrollIntoView({
    behavior: "smooth",
  });
}

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [toggleButtonVisible, setToggleButtonVisible] = useState(true);
  const windowWidth = useRef(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      windowWidth.current = window.innerWidth;
      if (windowWidth.current <= 768) {
        setIsSidebarOpen(false);
        setToggleButtonVisible(true);
      } else {
        setIsSidebarOpen(true);
        setToggleButtonVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigationItemClick = (id) => {
    smoothScroll(id);
    toggleButtonVisible && setIsSidebarOpen(false);
  };

  const navStyle = isSidebarOpen
    ? [styles.NavigationContainer, styles.Open].join(" ")
    : styles.NavigationContainer;

  return (
    <>
      {toggleButtonVisible && (
        <div
          className={styles.ToggleButton}
          onClick={() => {
            setIsSidebarOpen((prevState) => !prevState);
          }}
        >
          <FaBars size={25} />
        </div>
      )}
      <div className={navStyle}>
        <div className={styles.Name}>SANJA RUDIĆ</div>
        <div className={styles.ScientificTitle}>mag.ing.comp.</div>
        <div className={styles.Navigation}>
          {NAVIGATION_CONSTANTS.map((tab) => (
            <div
              key={tab.title}
              className={styles.Title}
              onClick={() => handleNavigationItemClick(tab.id)}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
