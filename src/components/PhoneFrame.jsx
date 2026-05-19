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
      {/* Screenshot sits behind the transparent frame */}
      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={styles.screenshot}
        />
      )}
      {/* Real iPhone 14 mockup — screen area is transparent so screenshot shows through */}
      <img
        src="/assets/phone-frame.png"
        alt=""
        aria-hidden="true"
        className={styles.frame}
      />
    </div>
  );
}
