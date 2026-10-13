import type { Metadata } from "next";
import { PreviewBookPage } from "@/components/PreviewBookPage";
import { PREVIEW_BOOK_PAGES } from "@/data/previewBookPages";

const page = PREVIEW_BOOK_PAGES["preview"];

export const metadata: Metadata = {
  title: "Official Preview Book \u2014 nywf64.com",
  description: "Official Preview Book of the 1964/1965 New York World\u2019s Fair \u2014 Artifacts & Legacies on nywf64.com.",
};

/**
 * Official Preview Book — Cover.
 * Stack: PreviewHero → PreviewNavChrome → navy title → tiles → Nav2Bar.
 */
export default function Page() {
  return (
    <PreviewBookPage
      titleId={page.titleId}
      groups={page.groups}
      previousHref={page.previousHref}
      nextHref={page.nextHref}
    />
  );
}
