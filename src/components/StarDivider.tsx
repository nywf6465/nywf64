import styles from "./StarDivider.module.css";

/**
 * Full-width solid thick burgundy rule under the site header (and footer).
 * Replaces the former thin navy rules + four-pointed star motif.
 */
export function StarDivider({ className }: { className?: string }) {
  return (
    <div
      className={[styles.divider, className].filter(Boolean).join(" ")}
      aria-hidden="true"
    />
  );
}
