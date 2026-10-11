import type { Metadata } from "next";
import { FarewellArticlePage } from "@/components/FarewellArticlePage";
import styles from "@/components/farewellArticlePage.module.css";
import { FAREWELL_01_BODY_HTML } from "./content";

export const metadata: Metadata = {
  title: "Remembering the Final Days \u2014 The End of the Fair \u2014 nywf64.com",
  description: "Remembering the Final Days \u2014 The End of the Fair at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * The End of the Fair — Remembering the Final Days.
 * Body from legacy farewell02.html (Page 1).
 *
 * Stack: farewellhero → FarewellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Farewell01Page() {
  return (
    <FarewellArticlePage
      pageNum={1}
      title="Remembering the Final Days"
      previousHref="/farewelloverview"
      nextHref="/farewell02"
    >
      <div
        className={styles.legacyBody}
        dangerouslySetInnerHTML={{ __html: FAREWELL_01_BODY_HTML }}
      />
    </FarewellArticlePage>
  );
}
