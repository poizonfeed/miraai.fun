import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CTAButton from "../components/CTAButton.jsx";
import styles from "./StubPage.module.css";

export default function Blog() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Blog</p>
          <h1 className={styles.title}>Stories from inside Mira</h1>
          <p className={styles.subhead}>
            Product updates, build notes, and ideas about agents living inside
            your messenger. New posts coming soon.
          </p>
          <CTAButton size="lg" label="Open Mira" />
        </div>
      </main>
      <Footer />
    </>
  );
}
