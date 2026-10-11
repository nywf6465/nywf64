import type { Metadata } from "next";
import { FarewellArticlePage } from "@/components/FarewellArticlePage";
import styles from "@/components/farewellArticlePage.module.css";
import { FAREWELL_02_BODY_HTML } from "./content";

export const metadata: Metadata = {
  title: "The Fair on Sale \u2014 The End of the Fair \u2014 nywf64.com",
  description: "The Fair on Sale \u2014 The End of the Fair at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * The End of the Fair — The Fair on Sale.
 * Body from legacy farewell03.html (Page 2).
 *
 * Stack: farewellhero → FarewellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Farewell02Page() {
  return (
    <FarewellArticlePage
      pageNum={2}
      title="The Fair on Sale"
      previousHref="/farewell01"
      nextHref="/farewell03"
    >
      <div
        className={styles.legacyBody}
        dangerouslySetInnerHTML={{ __html: FAREWELL_02_BODY_HTML }}
      />
    </FarewellArticlePage>
  );
}
