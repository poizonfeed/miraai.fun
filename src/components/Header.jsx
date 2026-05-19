import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import CTAButton from "./CTAButton.jsx";
import { useLang } from "../i18n/LangContext.jsx";
import styles from "./Header.module.css";

export default function Header() {
  const { lang, toggle, t } = useLang();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Logo />
        </div>

        <nav className={styles.nav} aria-label="Primary">
          <NavLink
            to="/group-chats"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            {t.nav.groupChats}
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            {t.nav.blog}
          </NavLink>
        </nav>

        <div className={styles.right}>
          <button
            className={styles.langToggle}
            onClick={toggle}
            aria-label="Switch language"
          >
            {lang === "en" ? "RU" : "EN"}
          </button>
          <CTAButton size="sm" label={t.cta} />
        </div>
      </div>
    </header>
  );
}
