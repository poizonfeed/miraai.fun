import CTAButton from "../components/CTAButton.jsx";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Bring Mira into your chats</h2>
        <p className={styles.subhead}>
          One tap to open. Zero setup. She's already waiting in Telegram.
        </p>
        <CTAButton size="lg" />
      </div>
    </section>
  );
}
