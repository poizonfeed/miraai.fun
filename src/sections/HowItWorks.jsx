import { useLang } from "../i18n/LangContext.jsx";
import styles from "./HowItWorks.module.css";

const NUMS = ["01", "02", "03"];

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.inner}>
        <header className={styles.head}>
          <h2 className={styles.title}>{t.howItWorks.title}</h2>
          <p className={styles.subhead}>{t.howItWorks.subhead}</p>
        </header>

        <div className={styles.grid}>
          <ol className={styles.steps}>
            {t.howItWorks.steps.map((step, i) => (
              <li key={i} className={styles.step}>
                <span className={styles.num}>{NUMS[i]}</span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.visual}>
            <picture className={styles.phone}>
              <source srcSet="/assets/photo-center.webp" type="image/webp" />
              <img src="/assets/photo-center.png" alt="Mira responding inside a Telegram chat" loading="lazy" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
