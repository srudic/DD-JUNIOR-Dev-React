import React from "react";
import styles from "./Education.module.css";

const education = [
  {
    institution:
      "Faculty of Electrical Engineering, Mechanical Engineering and Naval Architecture, Split, Croatia",
    degree: "Master of Science in Computer Science",
    graduationYear: "2023",
  },
  {
    institution:
      "Faculty of Electrical Engineering, Mechanical Engineering and Naval Architecture, Split, Croatia",
    degree: "Bachelor of Science in Computer Science",
    graduationYear: "2021",
  },
  {
    institution: "Medical High School Split",
    degree: "High School Diploma - Pharmacy technician",
    graduationYear: "2018",
  },
];

const Education = () => {
  return (
    <div className={styles.Education}>
      <h2 className={styles.SectionTitle}>Education</h2>
      <div className={styles.EducationItems}>
        {education.map((educationItem) => (
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
