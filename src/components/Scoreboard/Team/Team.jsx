import styles from "./Team.module.css";

const Team = ({ teamName, logoUrl }) => {
  return (
    <div className={styles.Team}>
      <h2>{teamName}</h2>
      <div className={styles.Image}>
        <img src={logoUrl} alt="Team Logo" style={{ maxWidth: "100px" }} />
      </div>
    </div>
  );
};

export default Team;
