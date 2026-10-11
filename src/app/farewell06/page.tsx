import type { Metadata } from "next";
import { FarewellArticlePage } from "@/components/FarewellArticlePage";
import styles from "@/components/farewellArticlePage.module.css";
import { FAREWELL_06_BODY_HTML } from "./content";

export const metadata: Metadata = {
  title: "The End of the Fair \u2014 The End of the Fair \u2014 nywf64.com",
  description: "The End of the Fair \u2014 The End of the Fair at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * The End of the Fair — The End of the Fair.
 * Body from legacy farewell07.html (Page 6).
 *
 * Stack: farewellhero → FarewellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Farewell06Page() {
  return (
    <FarewellArticlePage
      pageNum={6}
      title="The End of the Fair"
      previousHref="/farewell05"
      nextHref="/farewell07"
    >
      <div
        className={styles.legacyBody}
        dangerouslySetInnerHTML={{ __html: FAREWELL_06_BODY_HTML }}
      />
    </FarewellArticlePage>
  );
}
