import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CTAButton from "../components/CTAButton.jsx";
import { useLang } from "../i18n/LangContext.jsx";
import styles from "./StubPage.module.css";

export default function Blog() {
  const { t } = useLang();
  const p = t.pages.blog;

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{p.eyebrow}</p>
          <h1 className={styles.title}>{p.title}</h1>
          <p className={styles.subhead}>{p.subhead}</p>
          <CTAButton size="lg" label={p.cta} />
        </div>
      </main>
      <Footer />
    </>
  );
}
