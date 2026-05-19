import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { useLang } from "../i18n/LangContext.jsx";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tag}>{t.footer.tagline}</p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <Link to="/group-chats">{t.nav.groupChats}</Link>
          <Link to="/blog">{t.nav.blog}</Link>
          <a href="#privacy">{t.footer.privacy}</a>
          <a href="#terms">{t.footer.terms}</a>
        </nav>

        <p className={styles.copyright}>© {new Date().getFullYear()} Mira</p>
      </div>
    </footer>
  );
}
