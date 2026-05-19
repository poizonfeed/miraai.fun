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
        <picture className={`${styles.phone} ${styles.left}`}>
          <source srcSet="/assets/phone-left.webp" type="image/webp" />
          <img src="/assets/phone-left.png" alt="Mira in a Telegram chat" loading="lazy" />
        </picture>

        <picture className={`${styles.phone} ${styles.center}`}>
          <source srcSet="/assets/photo-center.webp" type="image/webp" />
          <img src="/assets/photo-center.png" alt="Mira chat home" loading="eager" />
        </picture>

        <picture className={`${styles.phone} ${styles.right}`}>
          <source srcSet="/assets/phone-right.webp" type="image/webp" />
          <img src="/assets/phone-right.png" alt="Mira Psychologist persona" loading="lazy" />
        </picture>
      </div>
    </section>
  );
}
