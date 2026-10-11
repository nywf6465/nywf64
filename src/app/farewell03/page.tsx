import type { Metadata } from "next";
import { FarewellArticlePage } from "@/components/FarewellArticlePage";
import styles from "@/components/farewellArticlePage.module.css";
import { FAREWELL_03_BODY_HTML } from "./content";

export const metadata: Metadata = {
  title: "A Source of Regret \u2014 The End of the Fair \u2014 nywf64.com",
  description: "A Source of Regret \u2014 The End of the Fair at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * The End of the Fair — A Source of Regret.
 * Body from legacy farewell04.html (Page 3).
 *
 * Stack: farewellhero → FarewellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Farewell03Page() {
  return (
    <FarewellArticlePage
      pageNum={3}
      title="A Source of Regret"
      previousHref="/farewell02"
      nextHref="/farewell04"
    >
      <div
        className={styles.legacyBody}
        dangerouslySetInnerHTML={{ __html: FAREWELL_03_BODY_HTML }}
      />
    </FarewellArticlePage>
  );
}
