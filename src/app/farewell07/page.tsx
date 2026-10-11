import type { Metadata } from "next";
import { FarewellArticlePage } from "@/components/FarewellArticlePage";
import styles from "@/components/farewellArticlePage.module.css";
import { FAREWELL_07_BODY_HTML } from "./content";

export const metadata: Metadata = {
  title: "Consigned to Oblivion \u2014 The End of the Fair \u2014 nywf64.com",
  description: "Consigned to Oblivion \u2014 The End of the Fair at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * The End of the Fair — Consigned to Oblivion.
 * Body from legacy farewell08.html (Page 7).
 *
 * Stack: farewellhero → FarewellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Farewell07Page() {
  return (
    <FarewellArticlePage
      pageNum={7}
      title="Consigned to Oblivion"
      previousHref="/farewell06"
      nextHref="/farewell08"
    >
      <div
        className={styles.legacyBody}
        dangerouslySetInnerHTML={{ __html: FAREWELL_07_BODY_HTML }}
      />
    </FarewellArticlePage>
  );
}
