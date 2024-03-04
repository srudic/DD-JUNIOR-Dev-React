import React from "react";
import styles from "./Education.module.css";

import { EDUCATION } from "../../UI/Constants";

const Education = () => {
  return (
    <div className={styles.Education} id={"education"}>
      <h2 className={styles.SectionTitle}>Education</h2>
      <div className={styles.EducationItems}>
        {EDUCATION.map((educationItem) => (
          <div
            className={styles.EducationItem}
            key={educationItem.graduationYear}
          >
            <h3>{educationItem.institution}</h3>
            <p>{educationItem.degree}</p>
            <p>Graduation Year: {educationItem.graduationYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
