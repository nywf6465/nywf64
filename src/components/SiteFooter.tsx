import { getSiteUpdated } from "@/lib/siteUpdated";
import { UtilityBar } from "./UtilityBar";
import { StarDivider } from "./StarDivider";
import styles from "./SiteFooter.module.css";

/** Site-wide footer: utility links + copyright + last-updated date (build stamp). */
export function SiteFooter() {
  const updated = getSiteUpdated();
  return (
    <>
      <UtilityBar />
      <footer className={styles.footer}>
        {/* Shared thick burgundy rule (same as header) */}
        <StarDivider className={styles.dividerSpacing} />
        <p className={styles.copy}>© 2026 nywf64.com. All Rights Reserved.</p>
        <p className={styles.updated}>
          nywf64.com was last updated on {updated}
        </p>
      </footer>
    </>
  );
}
