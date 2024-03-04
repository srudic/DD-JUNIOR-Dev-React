import React from "react";
import styles from "./Skills.module.css";

const skills = [
  {
    title: "HTML",
    percentage: "90%",
  },
  {
    title: "CSS",
    percentage: "80%",
  },
  {
    title: "JavaScript",
    percentage: "70%",
  },
];

const Skills = () => {
  return (
    <div className={styles.Container}>
      {skills.map((skill) => (
        <div key={skill.title} className={styles.Skill}>
          <div className={styles.Title}>{skill.title}</div>
          <div className={styles.ProgressBar}>
            <div
              className={styles.Progress}
              style={{ width: skill.percentage }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
