import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import CTAButton from "./CTAButton.jsx";
import styles from "./Header.module.css";

const NAV = [
  { to: "/group-chats", label: "Group Chats" },
  { to: "/blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Logo />
        </div>

        <nav className={styles.nav} aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.right}>
          <CTAButton size="sm" />
        </div>
      </div>
    </header>
  );
}
