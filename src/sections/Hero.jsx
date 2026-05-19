import PhoneFrame from "../components/PhoneFrame.jsx";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <h1 className={styles.headline}>
          Mira — the personal AI agent
          <br />
          that acts inside your messenger
        </h1>
        <p className={styles.subhead}>
          Works inside Telegram across personal
          <br className={styles.brOnDesktop} />
          and group chats with zero setup
        </p>
      </div>

      <div className={styles.phones}>
        <div className={`${styles.phoneSlot} ${styles.left}`}>
          <PhoneFrame
            src="/assets/phone-left.svg"
            alt="Mira drawing a Studio Ghibli–style portrait inside a Telegram chat"
            tilt={-8}
            scale={0.92}
            translateY={36}
            translateX={20}
            zIndex={1}
          />
        </div>

        <div className={`${styles.phoneSlot} ${styles.center}`}>
          <PhoneFrame
            src="/assets/phone-center.svg"
            alt="Mira chat home in Telegram with the prompt How I can help you today?"
            tilt={0}
            scale={1.08}
            translateY={0}
            zIndex={3}
          />
        </div>

        <div className={`${styles.phoneSlot} ${styles.right}`}>
          <PhoneFrame
            src="/assets/phone-right.svg"
            alt="Mira Psychologist persona inside Telegram"
            tilt={8}
            scale={0.92}
            translateY={36}
            translateX={-20}
            zIndex={1}
          />
        </div>
      </div>
    </section>
  );
}
