import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";

import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.Container}>
      <Home />
      <AboutMe />
      <Education />
      <Contact />
    </div>
  );
};

export default Content;
