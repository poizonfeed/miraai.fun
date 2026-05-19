import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo({ size = 28 }) {
  return (
    <Link to="/" className={styles.logo} aria-label="Mira home">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className={styles.mark}
      >
        <path
          fill="currentColor"
          d="M16 0c.5 5.7 1.8 9 4.4 11.6C23 14.2 26.3 15.5 32 16c-5.7.5-9 1.8-11.6 4.4C17.8 23 16.5 26.3 16 32c-.5-5.7-1.8-9-4.4-11.6C9 17.8 5.7 16.5 0 16c5.7-.5 9-1.8 11.6-4.4C14.2 9 15.5 5.7 16 0z"
        />
      </svg>
      <span className={styles.word}>Mira</span>
    </Link>
  );
}
