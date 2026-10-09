import type { Metadata } from "next";
import Link from "next/link";
import { DemocrNavChrome } from "@/components/DemocrNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Demonstration Center — nywf64.com",
  description:
    "Demonstration Center entries from the 1965 Official Guide Book and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Demonstration Center guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy democr01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964: season note — building was Hall of Education. Locate It → /democrmap.
 * Legacy wording (NewYork) preserved.
 */
export default function Democr01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Demonstration Center"
      titleId="democr01-title"
      hero={{
        src: "/images/democroverview/hero-banner.jpg",
        alt: "Demonstration Center at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<DemocrNavChrome />}
      previousHref="/democroverview"
      nextHref="/democr02"
      guide1964={{
        cover: {
          src: "/images/democr01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            The Demonstration Center was open for the 1965 Season. In 1964 this
            building was the <Link href="/haledu01">Hall of Education</Link>.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/democr01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/democr01/democr.gif",
          width: 144,
          height: 71,
          alt: "",
        },
        name: "DEMONSTRATION CENTER",
        copy: (
          <>
            Everything from shoes to school equipment is on view in this
            modernistic structure. A NewYork newspaper samples public opinion on
            important issues, a Bible society shows a color film. A futuristic
            scale model predicts the design of schools in the year 2000, and new
            developments in food, furnishings, art and electronics are displayed.
            There are also a children&apos;s &quot;adventure playground,&quot; a
            cafeteria, a kosher restaurant and a dining terrace.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/democr01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/democr01/industry-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/democrmap",
      }}
    />
  );
}
