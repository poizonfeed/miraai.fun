import { useLang } from "../i18n/LangContext.jsx";
import styles from "./Benefits.module.css";

const ICONS = [
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 6.5C4 5.12 5.12 4 6.5 4h11C18.88 4 20 5.12 20 6.5v8c0 1.38-1.12 2.5-2.5 2.5H10l-4 4v-4H6.5C5.12 17 4 15.88 4 14.5v-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 19c.6-2.8 2.9-4.5 5.5-4.5s4.9 1.7 5.5 4.5M14.5 19c.4-2 2-3.2 4-3.2s3.6 1.2 4 3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
];

export default function Benefits() {
  const { t } = useLang();

  return (
    <section className={styles.section} id="benefits">
      <div className={styles.inner}>
        <header className={styles.head}>
          <h2 className={styles.title}>{t.benefits.title}</h2>
          <p className={styles.subhead}>{t.benefits.subhead}</p>
        </header>

        <div className={styles.grid}>
          {t.benefits.items.map((item, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.icon}>{ICONS[i]}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
