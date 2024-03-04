import styles from "./Contact.module.css";

const SocialMediaButton = ({ title, icon, onClick }) => {
  return (
    <button className={styles.SocialMediaContainer} onClick={onClick}>
      <div className={styles.SocialMediaTitle}>{title}</div>
      <div className={styles.SocialMediaIcon}>{icon}</div>
    </button>
  );
};

export default SocialMediaButton;
