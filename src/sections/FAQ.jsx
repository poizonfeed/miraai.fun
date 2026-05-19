import FAQItem from "../components/FAQItem.jsx";
import { useLang } from "../i18n/LangContext.jsx";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const { t } = useLang();

  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <header className={styles.head}>
          <h2 className={styles.title}>{t.faq.title}</h2>
          <p className={styles.subhead}>{t.faq.subhead}</p>
        </header>

        <div className={styles.list}>
          {t.faq.items.map((item) => (
            <FAQItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
