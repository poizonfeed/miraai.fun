import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    n: "01",
    title: "Open Mira in Telegram",
    body: "Tap once. No download, no sign-up, no new account. Mira lives inside the app you already have open.",
  },
  {
    n: "02",
    title: "Ask anything in DM or group",
    body: "Brief Mira like you would a smart friend. Add her to a group and she follows the thread alongside you.",
  },
  {
    n: "03",
    title: "Mira acts, you stay in flow",
    body: "Drafts, plans, summaries, replies – Mira handles the work and hands the result back inside the chat.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.inner}>
        <header className={styles.head}>
          <h2 className={styles.title}>How Mira works inside Telegram</h2>
          <p className={styles.subhead}>Three taps from idle chat to acting agent.</p>
        </header>

        <div className={styles.grid}>
          <ol className={styles.steps}>
            {STEPS.map((step) => (
              <li key={step.n} className={styles.step}>
                <span className={styles.num}>{step.n}</span>
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
