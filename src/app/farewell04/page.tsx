import type { Metadata } from "next";
import { FarewellArticlePage } from "@/components/FarewellArticlePage";
import styles from "@/components/farewellArticlePage.module.css";
import { FAREWELL_04_BODY_HTML } from "./content";

export const metadata: Metadata = {
  title:
    "Essay: An Almost Fond Farewell (Before the Show Even Started) — The End of the Fair — nywf64.com",
  description:
    "Essay: An Almost Fond Farewell (Before the Show Even Started) by Craig Bavaro — The End of the Fair at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * The End of the Fair — Essay: An Almost Fond Farewell (Before the Show Even Started).
 * Body from legacy farewell05.html (Page 4).
 *
 * Stack: farewellhero → FarewellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Farewell04Page() {
  return (
    <FarewellArticlePage
      pageNum={4}
      title={
        <>
          Essay:{"  "}
          <em>An Almost Fond Farewell (Before the Show Even Started)</em>
        </>
      }
      byline="… by Craig Bavaro"
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
