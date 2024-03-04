import styles from "./Navigation.module.css";

const navigationTabs = [
  { title: "Home", selected: false },
  { title: "About me", selected: false },
  { title: "Education", selected: false },
  { title: "Contact", selected: false },
];

const Navigation = () => {
  return (
    <div className={styles.NavigationContainer}>
      <div className={styles.Navigation}>
        {navigationTabs.map((tab) => (
          <div key={tab.title} className={styles.Title}>
            {tab.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
