import type { Metadata } from "next";
import { FarewellArticlePage } from "@/components/FarewellArticlePage";
import styles from "@/components/farewellArticlePage.module.css";
import { FAREWELL_09_BODY_HTML } from "./content";

export const metadata: Metadata = {
  title: "Webmaster's note... \u2014 The End of the Fair \u2014 nywf64.com",
  description: "Webmaster's note... \u2014 The End of the Fair at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * The End of the Fair — Webmaster's note....
 * Body from legacy farewell10.html (Page 9).
 *
 * Stack: farewellhero → FarewellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Farewell09Page() {
  return (
    <FarewellArticlePage
      pageNum={9}
      title="Webmaster's note..."
      previousHref="/farewell08"
      nextHref="/farewell10"
    >
      <div
        className={styles.legacyBody}
        dangerouslySetInnerHTML={{ __html: FAREWELL_09_BODY_HTML }}
      />
    </FarewellArticlePage>
  );
}
