import styles from "./Contact.module.css";

import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import SocialMediaButton from "./SocialMediaButton.jsx";

const Contact = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/sanja-rudic-1a8b502a1/", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/srudic", "_blank");
  };

  return (
    <div className={styles.Container} id={"contact"}>
      <h2 className={styles.SectionTitle}>Contact</h2>
      <p className={styles.Text}>
        Whether you have a project idea in mind or just want to say hello, I'd
        love to hear from you. Let's collaborate and build something amazing
        together!
        <span className={styles.Icon}>
          <MdOutlineRocketLaunch color={"rgb(242, 192, 123)"} size={25} />
        </span>
      </p>
      <SocialMediaButton
        title="LinkedIn"
        icon={<FaLinkedin color={"#0077B5"} size={25} />}
        onClick={handleLinkedInClick}
      />
      <SocialMediaButton
        title="Github"
        icon={<FaGithub color={"black"} size={25} />}
        onClick={handleGithubClick}
      />
    </div>
  );
};

export default Contact;
