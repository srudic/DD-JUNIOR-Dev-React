import styles from "./AboutMe.module.css";
import Skills from "./Skills/Skills";
const AboutMe = () => {
  return (
    <div className={styles.AboutMeContainer}>
      <div className={styles.SectionTitle}>About Me</div>
      <p className={styles.Text}>
        Motivated Computer Science graduate seeking the role of a developer.
        Passionate about developing in React and Node.js. Developed several
        private projects, such as some on the GitHub profile. Adept at
        collaborating with diverse teams to incorporate different viewpoints and
        ensure technological solutions meet the needs of all users.
      </p>
      <div className={styles.SectionTitle}>Skills</div>
      <p className={styles.Text}>
        As a web developer, I focus on both front-end and back-end development,
        aiming to create responsive websites and web applications that enrich
        user experiences. While I possess solid skills in HTML, CSS, and
        JavaScript, I am continuously expanding my skills and knowledge,
        particularly in frameworks and libraries like React.js and Node.js.
      </p>
      <Skills />
    </div>
  );
};

export default AboutMe;
