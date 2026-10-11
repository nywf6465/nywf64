import type { Metadata } from "next";
import { FarewellArticlePage } from "@/components/FarewellArticlePage";
import styles from "@/components/farewellArticlePage.module.css";
import { FAREWELL_05_BODY_HTML } from "./content";

export const metadata: Metadata = {
  title: "On Shaky Ground \u2014 The End of the Fair \u2014 nywf64.com",
  description: "On Shaky Ground \u2014 The End of the Fair at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * The End of the Fair — On Shaky Ground.
 * Body from legacy farewell06.html (Page 5).
 *
 * Stack: farewellhero → FarewellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Farewell05Page() {
  return (
    <FarewellArticlePage
      pageNum={5}
      title="On Shaky Ground"
      previousHref="/farewell04"
      nextHref="/farewell06"
    >
      <div
        className={styles.legacyBody}
        dangerouslySetInnerHTML={{ __html: FAREWELL_05_BODY_HTML }}
      />
    </FarewellArticlePage>
  );
}
