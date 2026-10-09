import type { Metadata } from "next";
import { BilgraNavChrome } from "@/components/BilgraNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Billy Graham — nywf64.com",
  description:
    "Billy Graham entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Billy Graham guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy bilgra01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Locate It → /bilgramap (International Area).
 */
export default function Bilgra01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Billy Graham"
      titleId="bilgra01-title"
      hero={{
        src: "/images/bilgraoverview/hero-banner.jpg",
        alt: "Billy Graham at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BilgraNavChrome />}
      nextHref="/bilgra02"
      guide1964={{
        cover: {
          src: "/images/bilgra01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/bilgra01/logo-1964.gif",
          width: 144,
          height: 117,
          alt: "",
        },
        name: "BILLY GRAHAM",
        copy: (
          <>
            The well-known evangelist&apos;s religious message is presented by
            the Billy Graham Evangelistic Association in a color film and a
            variety of exhibits. Personal counseling is offered to all who desire
            it. An octagonal building houses a 400 seat theater, several
            counseling rooms and galleries, and is enclosed by a garden. Near the
            building is a 100-foot high tower which is topped by a brilliant
            sunburst.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: '"MAN IN THE FIFTH DIMENSION."',
            body: (
              <>
                This 28-minute color movie, shown on a 50-foot,
                &quot;wrap-around&quot; screen which provides a feeling of
                audience participation, is presented in the theater once an hour.
                The movie gives pictorial dimensions to Billy Graham&apos;s
                Biblical philosophy. There are simultaneous translations of his
                narration into French, German, Spanish, Chinese, Japanese and
                Russian. For those who accept the invitation to receive Christ,
                given by Dr. Graham in the film, a trained staff offers guidance
                and counseling.
              </>
            ),
          },
          {
            label: "AN INTERNATIONAL MINISTRY.",
            body: (
              <>
                In the surrounding garden and exhibit galleries, photographic
                displays show the international scope of Billy Graham&apos;s
                ministry. In the entrance gallery, there is a transparent,
                multi-colored globe, six feet in diameter, marked to show the
                places to which the minister has carried his worldwide Crusades
                for Christ.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/bilgra01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/bilgra01/logo-1965.gif",
          width: 144,
          height: 117,
          alt: "",
        },
        name: "BILLY GRAHAM",
        summary: (
          <>
            The famed evangelist&apos;s message is presented in a color film, and
            personal counseling is offered.
          </>
        ),
        copy: (
          <>
            The octagonal building houses a 400-seat theater and is surrounded by
            a garden. A 100-foot tower nearby is topped by a golden sunburst.
          </>
        ),
        highlights: [
          {
            label: "THE FILM.",
            body: (
              <>
                The 28-minute movie, &quot;Man in the Fifth Dimension,&quot; is
                shown on a 50-foot &quot;wrap-around&quot; screen once every
                hour. Graham&apos;s own narration is translated simultaneously
                into French, German, Spanish, Chinese, Japanese and Russian. For
                those who accept his invitation to receive Christ, counsel and
                religious guidance are offered.
              </>
            ),
          },
          {
            label: "INTERNATIONAL MINISTRY.",
            body: (
              <>
                In the garden and exhibit galleries, photographs show the scope
                of Billy Graham&apos;s work. In the entrance gallery is a
                transparent globe showing the places to which he has carried his
                Crusade for Christ.
              </>
            ),
          },
        ],
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/bilgra01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/bilgra01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/bilgramap",
      }}
    />
  );
}
