import type { Metadata } from "next";
import { AlaskaNavChrome } from "@/components/AlaskaNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Alaska — nywf64.com",
  description:
    "Alaska pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Alaska guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy alaska01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Alaska01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Alaska"
      titleId="alaska01-title"
      hero={{
        src: "/images/alaskaoverview/hero-banner.jpg",
        alt: "Alaska at the 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<AlaskaNavChrome />}
      previousHref="/alaskaoverview"
      nextHref="/alaska02"
      guide1964={{
        cover: {
          src: "/images/alaska01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/alaska01/alaska-logo-1964.gif",
          width: 144,
          height: 89,
          alt: "",
        },
        name: "ALASKA",
        copy: (
          <>
            In a white, igloo-shaped pavilion the 49th state has reconstructed a
            sample 11-minute &quot;day&quot; in the North country, using
            small-scale figures on a topographical map. Three 30-foot totem
            poles, originally carved by Indians for the St. Louis Fair of 1904,
            are in front of the building. Eskimo and Indian craftsmen are at work
            behind the pavilion.
          </>
        ),
        admission: "Admission: free to the pavilion; 25 cents to craft area.",
        highlights: [
          {
            label: "FISH AND DAMS.",
            body: (
              <>
                Exhibits show Eskimo and Indian life, the Alaskan fishing
                industry and the state&apos;s booming development - especially a
                new coastal ferry system and plans for the largest dam in the
                free world. There is an exhibit by Alaskan artists, and wild life
                is represented by stuffed bears, a 74-pound salmon, moose,
                caribou and others.
              </>
            ),
          },
          {
            label: "LIFE IN THE NORTH.",
            body: (
              <>
                In the igloo&apos;s second story is a theater with a
                32-square-foot topographical model of Alaska. During a narration,
                portions of the model light up, and the dome itself becomes a
                planetarium portraying the skies over Alaska. Slides depict the
                state&apos;s industries and people at work. The show ends with a
                colorful display of simulated northern lights.
              </>
            ),
          },
          {
            label: "CRAFTSMEN'S VILLAGE.",
            body: (
              <>
                In the area behind the pavilion Indian and Eskimo craftsmen make
                carvings in wood and ivory. There are live deer, bear cubs and
                huskies. Fur parkas, mukluks and other Alaskan items are
                displayed, and a shop sells such delicacies as sourdough sauce.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/alaska01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/alaska01/alaska-logo-1965.gif",
          width: 144,
          height: 89,
          alt: "",
        },
        name: "ALASKA",
        summary: (
          <>
            Under a white, igloo-shaped dome, the 49th state presents its
            wildlife, industry and Indian crafts.
          </>
        ),
        copy: (
          <>
            On view are 30-foot totem poles originally carved for the St. Louis
            Fair of 1904, and exhibits illustrating Alaska&apos;s booming
            industrial development.
          </>
        ),
        admission:
          "Admission: free to the pavilion; 25 cents to the craft area.",
        highlights: [
          {
            label: "WORLD OF WATER.",
            body: (
              <>
                Featured are the state&apos;s new coastal ferry system, its
                fishing industry and plans for the largest dam in the Free World.
                Also shown are the works of Alaskan artists, and wildlife such as
                stuffed bears, a 74-pound mounted salmon, moose and caribou.
              </>
            ),
          },
          {
            label: "NORTHERN LIGHTS.",
            body: (
              <>
                In a theater under the dome, a huge topographical model of the
                state lights up during a narration of Alaskan life, and the dome
                itself becomes a planetarium of the northern skies with a display
                of the aurora borealis.
              </>
            ),
          },
          {
            label: "CRAFTSMEN'S VILLAGE.",
            body: (
              <>
                Indian and Eskimo carvings in wood and ivory are displayed; live
                deer, bear cubs and huskies may be seen. Fur parkas, mukluks and
                other items made in Alaska are exhibited, and a shop offers such
                local delicacies as sourdough sauce.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/alaska01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/alaska01/federal-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/alaskamap",
      }}
    />
  );
}
