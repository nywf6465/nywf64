import type { Metadata } from "next";
import { FarewellArticlePage } from "@/components/FarewellArticlePage";
import styles from "@/components/farewellArticlePage.module.css";
import { FAREWELL_04_BODY_HTML } from "./content";

export const metadata: Metadata = {
  title: "... an essay by Craig Bavaro \u2014 The End of the Fair \u2014 nywf64.com",
  description: "... an essay by Craig Bavaro \u2014 The End of the Fair at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * The End of the Fair — ... an essay by Craig Bavaro.
 * Body from legacy farewell05.html (Page 4).
 *
 * Stack: farewellhero → FarewellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Farewell04Page() {
  return (
    <FarewellArticlePage
      pageNum={4}
      title="... an essay by Craig Bavaro"
      previousHref="/farewell03"
      nextHref="/farewell05"
    >
      <div
        className={styles.legacyBody}
        dangerouslySetInnerHTML={{ __html: FAREWELL_04_BODY_HTML }}
      />
    </FarewellArticlePage>
  );
}
