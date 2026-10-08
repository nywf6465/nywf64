import type { Metadata } from "next";
import { SpainEssayPage } from "@/components/SpainEssayPage";
import { SPAIN14_BLOCKS } from "./blocks";

export const metadata: Metadata = {
  title: "A Visit to the Spanish Pavilion in Saint Louis — Spain — nywf64.com",
  description:
    "A Visit to the Spanish Pavilion in Saint Louis — Spanish Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Spain — A Visit to the Spanish Pavilion in Saint Louis (legacy spain14.html).
 * Stack: hero → SpainNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Spain14Page() {
  return (
    <SpainEssayPage
      slug="spain14"
      title="A Visit to the Spanish Pavilion in Saint Louis"
      blocks={SPAIN14_BLOCKS}
      previousHref="/spain13"
      nextHref="/spainoverview"
    />
  );
}
