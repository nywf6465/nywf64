import type { Metadata } from "next";
import { FarewellArticlePage } from "@/components/FarewellArticlePage";
import styles from "@/components/farewellArticlePage.module.css";
import { FAREWELL_08_BODY_HTML } from "./content";

export const metadata: Metadata = {
  title: "Gallery of Photographs \u2014 The End of the Fair \u2014 nywf64.com",
  description: "Gallery of Photographs \u2014 The End of the Fair at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * The End of the Fair — Gallery of Photographs.
 * Body from legacy farewell09.html (Page 8).
 *
 * Stack: farewellhero → FarewellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Farewell08Page() {
  return (
    <FarewellArticlePage
      pageNum={8}
      title="Gallery of Photographs"
      previousHref="/farewell07"
      nextHref="/farewell09"
    >
      <div
        className={styles.legacyBody}
        dangerouslySetInnerHTML={{ __html: FAREWELL_08_BODY_HTML }}
      />
    </FarewellArticlePage>
  );
}
