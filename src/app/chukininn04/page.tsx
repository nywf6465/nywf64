import type { Metadata } from "next";
import { ChukininnNavChrome } from "@/components/ChukininnNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Chukin Inn — nywf64.com",
  description:
    "Chun King Inn photograph album — publication photograph from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chukin Inn photograph album — “photographs” standard.
 * Body from legacy chukininn04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 * Last Chukin Inn topic: NEXT returns to /chukininnoverview.
 */
export default function Chukininn04Page() {
  return (
    <PhotographsPage
      heroLabel="Chukin Inn"
      titleId="chukininn04-title"
      title="Photograph Album"
      hero={{
        src: "/images/chukininnoverview/hero-banner.jpg",
        alt: "Chukin Inn at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<ChukininnNavChrome />}
      previousHref="/chukininn03"
      overviewHref="/chukininnoverview"
      nextHref="/chukininnoverview"
      sections={[
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/chukininn04/plexiglass.jpg",
                width: 350,
                height: 197,
                alt: "CHUN KING PAVILION",
              },
              title: (
                <>
                  CHUN KING PAVILION
                  <br />
                  <span style={{ fontWeight: 400 }}>
                    The transparent walls of this restaurant are made of
                    Plexiglass by a new sandwich-panel construction. The
                    exceptional resistance of Plexiglass to breakage is important
                    in this installation.
                  </span>
                </>
              ),
              source: (
                <>
                  SOURCE: Brochure <em>Plexiglass at the Fair</em>
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
