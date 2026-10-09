import type { Metadata } from "next";
import { GarmedNavChrome } from "@/components/GarmedNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Garden of Meditation — nywf64.com",
  description:
    "Garden of Meditation photograph album — fairgoer and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Garden of Meditation photograph album — “photographs” standard.
 * Body from legacy garmed03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Garmed03Page() {
  return (
    <PhotographsPage
      heroLabel="Garden of Meditation"
      titleId="garmed03-title"
      hero={{
        src: "/images/garmedoverview/hero-banner.jpg",
        alt: "Garden of Meditation at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GarmedNavChrome />}
      previousHref="/garmed02"
      overviewHref="/garmedoverview"
      nextHref="/garmedoverview"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/garmed03/garmed02.jpg",
                width: 400,
                height: 298,
                alt: "Garden of Meditation",
              },
              title: "Garden of Meditation",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/garmed03/garmed01.jpg",
                width: 475,
                height: 205,
                alt: "This family relaxes amid the restful surroundings of the Garden of Meditation",
              },
              title: (
                <>
                  This family relaxes amid the restful surroundings of the Garden
                  of Meditation. Fair set aside two acres and transformed it
                  into a quiet refuge from the usual hurly burly.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters and Richard Lewis,{" "}
                  <em>New York Sunday News</em>, October 4, 1964
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
