import { useRef, useState, useEffect } from "react";
import styles from "./Hero.module.css";

const PHONES = [
  { webp: "/assets/phone-left.webp",   png: "/assets/phone-left.png",   alt: "Mira in a Telegram chat" },
  { webp: "/assets/photo-center.webp", png: "/assets/photo-center.png", alt: "Mira chat home" },
  { webp: "/assets/phone-right.webp",  png: "/assets/phone-right.png",  alt: "Mira Psychologist persona" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  // Scroll to center phone on mount
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft = track.clientWidth;
    setActive(1);
  }, []);

  // Update dot indicator on scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      setActive(index);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

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

      {/* Desktop: overlapping 3-phone composition */}
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

      {/* Mobile: swipeable carousel */}
      <div className={styles.carousel}>
        <div className={styles.track} ref={trackRef}>
          {PHONES.map((p, i) => (
            <div key={i} className={styles.slide}>
              <picture>
                <source srcSet={p.webp} type="image/webp" />
                <img src={p.png} alt={p.alt} loading={i === 1 ? "eager" : "lazy"} />
              </picture>
            </div>
          ))}
        </div>
        <div className={styles.dots} aria-hidden="true">
          {PHONES.map((_, i) => (
            <span key={i} className={`${styles.dot} ${active === i ? styles.dotActive : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
