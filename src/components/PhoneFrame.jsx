import styles from "./PhoneFrame.module.css";

export default function PhoneFrame({
  src,
  alt = "",
  tilt = 0,
  scale = 1,
  translateY = 0,
  translateX = 0,
  zIndex = 1,
  className = "",
}) {
  const transform = `translate(${translateX}px, ${translateY}px) rotate(${tilt}deg) scale(${scale})`;
  return (
    <div
      className={[styles.phone, className].filter(Boolean).join(" ")}
      style={{ transform, zIndex }}
    >
      <div className={styles.frame}>
        <div className={styles.notch} aria-hidden="true" />
        <div className={styles.screen}>
          {src ? (
            <img src={src} alt={alt} loading="lazy" />
          ) : (
            <div className={styles.empty} aria-hidden="true" />
          )}
        </div>
      </div>
    </div>
  );
}
