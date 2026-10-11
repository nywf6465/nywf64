import type { Metadata } from "next";
import { FarewellArticlePage } from "@/components/FarewellArticlePage";
import styles from "@/components/farewellArticlePage.module.css";
import { FAREWELL_10_BODY_HTML } from "./content";

export const metadata: Metadata = {
  title: "Epilogue \u2014 The End of the Fair \u2014 nywf64.com",
  description: "Epilogue \u2014 The End of the Fair at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/**
 * The End of the Fair — Epilogue.
 * Body from legacy farewell11.html (Page 10).
 *
 * Stack: farewellhero → FarewellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Farewell10Page() {
  return (
    <FarewellArticlePage
      pageNum={10}
      title="Epilogue"
      previousHref="/farewell09"
      nextHref="/farewelloverview"
    >
      <div
        className={styles.legacyBody}
        dangerouslySetInnerHTML={{ __html: FAREWELL_10_BODY_HTML }}
      />
    </FarewellArticlePage>
  );
}
