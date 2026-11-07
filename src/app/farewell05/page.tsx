import type { Metadata } from "next";
import { FarewellArticlePage } from "@/components/FarewellArticlePage";
import styles from "@/components/farewellArticlePage.module.css";
import { FAREWELL_05_BODY_HTML } from "./content";

export const metadata: Metadata = {
  title: "Essay: On Shaky Ground — The End of the Fair — nywf64.com",
  description:
    "Essay: On Shaky Ground — The End of the Fair at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * The End of the Fair — Essay: On Shaky Ground.
 * Body from legacy farewell06.html (Page 5).
 *
 * Stack: farewellhero → FarewellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Farewell05Page() {
  return (
    <FarewellArticlePage
      pageNum={5}
      title={
        <>
          Essay:{"  "}
          <em>On Shaky Ground</em>
        </>
      }
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
