import type { Metadata } from "next";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guide Book & Souvenir Map — Tower of Light — nywf64.com",
  description:
    "Tower of Light entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light guidebook page — “guidebook” standard.
 * Body from legacy twrlit01.html. Layout: GuidebookSouvenirPage (/bell01).
 */
export default function Twrlit01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Tower of Light"
      titleId="twrlit01-title"
      title="1964 & 1965 Official Guide Book & Souvenir Map"
      hero={{
        src: "/images/twrlitoverview/hero-banner.jpg",
        alt: "Tower of Light at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TwrlitNavChrome />}
      previousHref="/twrlitoverview"
      nextHref="/twrlit02"
      guide1964={{
        cover: {
          src: "/images/twrlit01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/twrlit01/twrlitlogo64.gif",
          width: 144,
          height: 114,
          alt: "",
        },
        name: "TOWER OF LIGHT",
        copy: (
          <>
            The world&apos;s most powerful searchlight beam rises from the center
            of this unusual building, whose exterior walls consist of 600
            aluminum prisms fitted together to form an eye-catching pattern.
            Sponsored by investor-owned electric utility companies throughout
            the nation, the building is entered by a moving ramp that carries
            visitors over a reflecting pool and deposits them on a giant
            turntable. The turntable revolves past seven chambers, stopping at
            each chamber for a new episode of a musical presentation on the
            benefits of electricity.
          </>
        ),
        admission: ["Admission: free.", "Show takes 25 minutes"],
        highlights: [
          {
            label: "AROUND THE THEATER.",
            body: (
              <>
                Inside the show chambers, three-dimensional animated figures and
                special audio-visual effects and songs illustrate the wonders of
                electric power and light. The scenes include a research
                laboratory of flashing lights, whirling turbines and sparking
                coils; a &quot;beauty parlor&quot; in which an animated
                &quot;Madame Cow&quot; extols the pleasures of warm electric
                milkers on icy winter mornings; a house filled with modern
                electric appliances; a barrage of 4th of July fireworks; and a
                dazzling Christmas sequence.
              </>
            ),
          },
          {
            label: "THE SOURCE OF LIGHT.",
            body: (
              <>
                In the center of the pavilion, visitors may examine the 12
                one-billion-candlepower searchlights - equal to 340,000
                automobile headlights - that create the central beam, which
                points straight up and is visible for miles around.
              </>
            ),
          },
          {
            label: "ELECTRICAL CLIMATE CONTROL.",
            body: (
              <>
                Behind a double-glass window in a special chamber near the exit
                is a frosty, iridescent cave; in the cave figures of a cheerful
                penguin, a lovesick polar bear and a sirenlike mermaid act out
                the advantage of modern air-conditioning.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/twrlit01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/twrlit01/twrlitlogo.gif",
          width: 144,
          height: 114,
          alt: "",
        },
        name: "TOWER OF LIGHT",
        nameFace: "arial",
        summary: (
          <>
            A musical show depicts the benefits of electricity. Pointing skyward
            from the pavilion is the world&apos;s most powerful searchlight.
          </>
        ),
        copy: (
          <>
            The building, rising in a forest of aluminum-faced prisms, is
            sponsored by 150 investor-owned electric utility companies. Visitors
            see the 15-minute show from swivel seats on a giant turntable.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "THE THEATER.",
            labelFace: "arial",
            body: (
              <>
                In a musical show featuring animated figures, a character called
                Reddy Kilowatt introduces Ben Franklin to the modern uses of
                electricity. In one scene on a farm, Reddy and Ben sing of the
                joys of electrical living; in another scene of a typical home,
                modern appliances amaze old Mr. Franklin.
              </>
            ),
          },
          {
            label: "SOURCE OF LIGHT.",
            labelFace: "arial",
            body: (
              <>
                The 12-billion candle-power beam rising out of the pavilion&apos;s
                center is turned on nightly amid appropriate ceremonies, often
                attended by celebrities.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/twrlit01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/twrlit01/indsmlmap.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/twrlitmap",
      }}
    />
  );
}
