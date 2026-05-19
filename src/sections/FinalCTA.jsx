import CTAButton from "../components/CTAButton.jsx";
import { useLang } from "../i18n/LangContext.jsx";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  const { t } = useLang();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t.finalCta.title}</h2>
        <p className={styles.subhead}>{t.finalCta.subhead}</p>
        <CTAButton size="lg" label={t.cta} />
      </div>
    </section>
  );
}
