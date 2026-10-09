import type { Metadata } from "next";
import { BountyNavChrome } from "@/components/BountyNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook — Bounty — nywf64.com",
  description:
    "Bounty entries from the 1964 Official Guide Book — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bounty guidebook page — Official Guidebook only (no Souvenir Map section).
 * Body from legacy bounty01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1965: attraction did not reopen. No legacy locate-it map page (bountymap 404).
 */
export default function Bounty01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Bounty"
      titleId="bounty01-title"
      hero={{
        src: "/images/bountyoverview/hero-banner.jpg",
        alt: "Bounty at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<BountyNavChrome />}
      nextHref="/bounty02"
      guide1964={{
        cover: {
          src: "/images/bounty01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/bounty01/bounty-logo.jpg",
          width: 144,
          height: 96,
          alt: "",
        },
        name: '"BOUNTY"',
        copy: (
          <>
            The famous British armed merchant-man, as re-created in meticulous
            detail for the 1962 movie, <em>Mutiny on the Bounty</em>, is
            displayed by Metro-Goldwyn-Mayer at the Marina in Flushing Bay; it
            can be reached by bus from Gate 2 of the Fair. The replica was built
            in Nova Scotia, to the plans of the 18th Century vessel.
          </>
        ),
        admission:
          "Admission: adults, 90 cents; children under 12, 50 cents.",
        highlights: [
          {
            label: "READY FOR THE SEA.",
            body: (
              <>
                The <em>Bounty</em> is shown much as the original looked when
                first mate Fletcher Christian seized control of the ship from
                Captain William Bligh in 1789. She has three masts, 14 horizontal
                yards and more than 10 miles of rigging. Her cannon are in place,
                her cabins completely furnished, her hold packed with hogsheads.
                The ship has traveled more than 40,000 miles under sail.
                Uniformed attendants answer questions.
              </>
            ),
          },
          {
            label: "EXHIBITS ON SHORE.",
            body: (
              <>
                A tropical exhibit area, set amid lush foliage, has a number of
                attractions:
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>The survival craft</em> is a replica of the ship&apos;s
                23-foot launch, in which Bligh and 18 loyal crewmen, put adrift
                by the mutineers, sailed 3,600 miles to safety.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>The canoe of the temptresses</em> is a 57-foot sailing canoe
                of the type that brought lovely visiting ladies from Tahiti to
                the <em>Bounty</em> and so helped stir up the mutiny.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>Bounty souvenirs</em>, including jewelry, models and color
                film of the ship at sea are on sale in a thatched hut.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/bounty01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>The &quot;Bounty&quot; attraction did not reopen in 1965.</>
        ),
      }}
    />
  );
}
