import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tag}>The personal AI agent for Telegram.</p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <Link to="/group-chats">Group Chats</Link>
          <Link to="/blog">Blog</Link>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </nav>

        <p className={styles.copyright}>© {new Date().getFullYear()} Mira</p>
      </div>
    </footer>
  );
}
