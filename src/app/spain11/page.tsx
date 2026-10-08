import type { Metadata } from "next";
import { SpainEssayPage } from "@/components/SpainEssayPage";
import { SPAIN11_BLOCKS } from "./blocks";

export const metadata: Metadata = {
  title: "Shows — Spain — nywf64.com",
  description:
    "Shows — Spanish Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Spain — Shows (legacy spain11.html).
 * Stack: hero → SpainNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Spain11Page() {
  return (
    <SpainEssayPage
      slug="spain11"
      title="Shows"
      blocks={SPAIN11_BLOCKS}
      previousHref="/spain10"
      nextHref="/spain12"
    />
  );
}
