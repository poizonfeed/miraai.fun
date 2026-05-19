import { useRef, useState, useEffect } from "react";
import { useLang } from "../i18n/LangContext.jsx";
import styles from "./Hero.module.css";

const PHONES = [
  { webp: "/assets/phone-left.webp",   png: "/assets/phone-left.png",   alt: "Mira in a Telegram chat" },
  { webp: "/assets/photo-center.webp", png: "/assets/photo-center.png", alt: "Mira chat home" },
  { webp: "/assets/phone-right.webp",  png: "/assets/phone-right.png",  alt: "Mira Psychologist persona" },
];

export default function Hero() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft = track.clientWidth;
    setActive(1);
  }, []);

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

  const [line1, line2] = t.hero.headline.split("\n");

  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <h1 className={styles.headline}>
          {line1}
          <br />
          {line2}
        </h1>
        <p className={styles.subhead}>
          {t.hero.subhead.split("\n").map((line, i) => (
            <span key={i}>{line}{i === 0 && <br className={styles.brOnDesktop} />}</span>
          ))}
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
