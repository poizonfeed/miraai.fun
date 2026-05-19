import styles from "./CTAButton.module.css";

const DEFAULT_HREF =
  import.meta.env.VITE_MIRA_CTA_URL || "https://t.me/MiraAIBot";

export default function CTAButton({
  label = "Open App",
  href,
  size = "md",
  showArrow = true,
  className = "",
}) {
  const finalHref = href || DEFAULT_HREF;
  const isExternal = /^https?:\/\//i.test(finalHref);

  return (
    <a
      className={[styles.cta, styles[size], className].filter(Boolean).join(" ")}
      href={finalHref}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <span>{label}</span>
      {showArrow && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={styles.arrow}
        >
          <path
            d="M5 12h14M13 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
}
