import type { Metadata } from "next";
import Link from "next/link";
import { ChucenNavChrome } from "@/components/ChucenNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Churchill Center — nywf64.com",
  description:
    "Churchill Center entries from the 1965 Official Guide Book and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Churchill Center guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy chucen01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964: building was the World's Fair Pavilion. Locate It → /chucenmap (Industrial Area).
 */
export default function Chucen01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Churchill Center"
      titleId="chucen01-title"
      hero={{
        src: "/images/chucenoverview/hero-banner.jpg",
        alt: "Churchill Center at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<ChucenNavChrome />}
      previousHref="/chucenoverview"
      nextHref="/chucen02"
      guide1964={{
        cover: {
          src: "/images/chucen01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            The Churchill center was open for the 1965 Season. In 1964 this
            building was{" "}
            <Link href="/wfpav01">The World&apos;s Fair Pavilion</Link>.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/chucen01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/chucen01/wfpavlogo.gif",
          width: 144,
          height: 69,
          alt: "",
        },
        name: "CHURCHILL CENTER",
        summary: (
          <>
            The life and times of Sir Winston Churchill are re-created in
            photographs, models, paintings and personal effects.
          </>
        ),
        copy: (
          <>
            This tribute to the great British leader is given by People-to-People,
            an organization founded and headed by ex-President Eisenhower and
            dedicated to international understanding. Included in exhibits
            documenting Sir Winston&apos;s career are some of his own paintings,
            and photographs of him at various periods in his life. Also on display
            are a replica of Churchill&apos;s study at Chartwell; models of
            Blenheim Palace, where he was born, and Bladon churchyard, where he
            lies buried; and an exhibit of his personal effects, including his
            desk, which once belonged to Disraeli. Proceeds from admission charges
            will go to a fund to create an international educational institution
            to teach foreign affairs and perpetuate Sir Winston&apos;s ideas.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/chucen01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/chucen01/industry-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial Area map",
        },
        locateHref: "/chucenmap",
      }}
    />
  );
}
