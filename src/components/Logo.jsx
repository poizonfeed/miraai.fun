import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo({ size = 32 }) {
  return (
    <Link to="/" className={styles.logo} aria-label="Mira home">
      <img
        src="/assets/mira-icon.jpg"
        alt=""
        width={size}
        height={size}
        className={styles.icon}
      />
      <span className={styles.word}>Mira</span>
    </Link>
  );
}
