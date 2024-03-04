import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.Wrapper} id={"home"}>
      <div className={styles.Hello}>
        <TypeAnimation
          sequence={[
            "H",
            500,
            "HE",
            500,
            "HEL",
            500,
            "HELL",
            500,
            "HELLO",
            500,
            "HELLO,",
            500,
          ]}
          cursor={false}
        />
      </div>

      <p>I'm Sanja.</p>
      <p>
        Welcome to my portfolio website. I'm a passionate web developer with a
        degree in Computer Science.
      </p>
    </div>
  );
};

export default Home;
