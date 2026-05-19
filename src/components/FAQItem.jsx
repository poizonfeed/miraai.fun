import styles from "./FAQItem.module.css";

export default function FAQItem({ question, answer }) {
  return (
    <details className={styles.item}>
      <summary className={styles.summary}>
        <span>{question}</span>
        <span className={styles.chevron} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </summary>
      <div className={styles.body}>
        <p>{answer}</p>
      </div>
    </details>
  );
}
