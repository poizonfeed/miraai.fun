import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <h1 className={styles.headline}>
          Mira – the personal AI agent
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
        <img
          src="/assets/phone-left.png"
          alt="Mira in a Telegram chat"
          className={`${styles.phone} ${styles.left}`}
          loading="lazy"
        />
        <img
          src="/assets/photo-center.png"
          alt="Mira chat home"
          className={`${styles.phone} ${styles.center}`}
          loading="eager"
        />
        <img
          src="/assets/phone-right.png"
          alt="Mira Psychologist persona"
          className={`${styles.phone} ${styles.right}`}
          loading="lazy"
        />
      </div>
    </section>
  );
}
