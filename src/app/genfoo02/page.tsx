import type { Metadata } from "next";
import Image from "next/image";
import { GenfooNavChrome } from "@/components/GenfooNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — General Foods Arches — nywf64.com",
  description:
    "General Foods Information Panels entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Foods Arches Information Manual page — “manual” standard.
 * Body from legacy genfoo02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (picutres) preserved.
 */
export default function Genfoo02Page() {
  return (
    <InformationManualPage
      heroLabel="General Foods Arches"
      titleId="genfoo02-title"
      hero={{
        src: "/images/genfoooverview/hero-banner.jpg",
        alt: "General Foods Arches at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GenfooNavChrome />}
      previousHref="/genfoo01"
      overviewHref="/genfoooverview"
      nextHref="/genfoo03"
      factsLeft={[
        {
          label: "ATTRACTION",
          lines: ["General Foods Information Panels"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Fred K. Smart",
            "General Foods Corporation",
            "250 North Street",
            "White Plains, New York",
            "914 694-2500",
          ],
        },
        {
          label: "GENERAL INDICATOR REPRESENTATIVE",
          lines: [
            "Mr. Robert Roston",
            "General Indicator Company",
            "271 Madison Avenue",
            "New York 16, New York",
            "OR 9-1061",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["November 18, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["See Map"],
        },
        {
          label: "ARCH ARCHITECT",
          lines: [
            "Mr. Jack Jollife",
            "43 Forest Row",
            "Great Neck, New York",
            "516 HN 6-2416",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["General Indicator"],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. William Ottley"],
        },
      ]}
      primaryFigure={{
        src: "/images/genfoo02/gf16.jpg",
        width: 600,
        height: 1140,
        alt: "General Foods Information Panels fact sheet",
      }}
      features={[
        {
          body: (
            <>
              The Information Panels are a new and unusual method of imparting
              information to the Fair visitors.
            </>
          ),
        },
        {
          body: (
            <>
              The General Indicator Company designed, installed, supplied and
              maintains 15 Information Panels at various locations on the Fair
              Site for the General Foods Corporation. These boards operate by
              means of a modern, remote control, computer oriented, electric
              system and can be changed immediately from one central point.
              Seven of these panels are single faced and four are double faced
              so as to be read from both sides. The Information Panels are
              affixed to 11 steel arches, 60 feet high and 30 feet wide at the
              base. The panel itself is 23 feet wide and 6 feet high.
            </>
          ),
        },
        {
          body: (
            <>
              On the back of the seven single faced arches there is a large
              outline map of the Fair grounds. An arrow and the words &quot;You
              Are Here&quot; shows viewers exactly where they are on the
              grounds. The arches are externally illuminated on both sides by
              floodlights. High in each arch, almost at the crown and in
              prominent sculptured lettering &quot;floats&quot; the World&apos;s
              Fair theme: &quot;Peace Through Understanding.&quot; Directly
              beneath the Information Panel are mounted three rectangular
              shaped, internally-illuminated, single faced photo panels 6 feet
              in width and 2 1/2 feet high. Behind these three viewing screens
              are three changeable, 10 message picutres. The photo
              &quot;messages&quot; consist of Fair scenes and depictions of
              General Foods products or company activities. The system operates
              12 hours daily, 7 days a week.
            </>
          ),
        },
        {
          body: (
            <>
              These &quot;Archways to Understanding&quot; inform visitors of all
              special daily events, their location, and starting time. They are
              also used for news coverage of all events of the Fair and in the
              world, and all special vital information for the convenience of
              Fair visitors such as weather, changes in events, traffic
              conditions and other public-service messages.
            </>
          ),
        },
      ]}
      afterFeatures={
        <>
          <hr className={manualStyles.rule} />
          <figure className={manualStyles.figure}>
            <Image
              src="/images/genfoo02/gf17.jpg"
              alt=""
              width={600}
              height={634}
              className={manualStyles.figureArt}
              unoptimized
            />
            <figcaption className={manualStyles.figureCaption}>
              <p className={manualStyles.figureSource}>
                SOURCE: 1964 World&apos;s Fair Information Manual
              </p>
            </figcaption>
          </figure>
        </>
      }
      secondaryFigure={{
        src: "/images/genfoo02/gf18.jpg",
        width: 600,
        height: 472,
        alt: "General Foods Information Arches",
        bordered: true,
        title: "General Foods Information Arches",
        source: (
          <>
            Source: NY World&apos;s Fair Publication{" "}
            <em>
              For Those Who Produced the New York World&apos;s Fair 1964-1965
            </em>
          </>
        ),
      }}
    />
  );
}
