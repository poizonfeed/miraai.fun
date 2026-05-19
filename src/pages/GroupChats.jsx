import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CTAButton from "../components/CTAButton.jsx";
import styles from "./StubPage.module.css";

export default function GroupChats() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Group Chats</p>
          <h1 className={styles.title}>Mira works in your group chats</h1>
          <p className={styles.subhead}>
            Invite Mira to any Telegram group. She follows the thread, answers
            when called on, and helps the whole room move faster.
          </p>
          <CTAButton size="lg" label="Add Mira to a group" />
        </div>
      </main>
      <Footer />
    </>
  );
}
