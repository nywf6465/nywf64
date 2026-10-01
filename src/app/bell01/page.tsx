import type { Metadata } from "next";
import { BellNavChrome } from "@/components/BellNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Bell System — nywf64.com",
  description:
    "Bell System entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bell System guidebook page — canonical “guidebook” standard instance.
 * Body from legacy bell01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Future attraction `*01` guidebooks should copy this page and fill props from
 * their legacy HTML (see AGENTS.md “Guidebook standard”).
 */
export default function Bell01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Bell System Pavilion"
      titleId="bell01-title"
      hero={{
        src: "/images/belloverview/hero-banner.jpg",
        alt: "Bell System Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BellNavChrome />}
      previousHref="/belloverview"
      nextHref="/bell02"
      guide1964={{
        cover: {
          src: "/images/bell01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/bell01/bell-logo-1964.gif",
          width: 144,
          height: 115,
          alt: "",
        },
        name: "BELL SYSTEM",
        copy: (
          <>
            Man&apos;s speediest communication was once by drumbeat and smoke
            signal. Now he sends messages around the world by bouncing them
            off satellites in space. The story of this breathtaking advance
            in communications is told visually in a 15-minute armchair ride
            in the giant &quot;floating wing&quot; that comprises the upper
            story of this pavilion. In a lower level, an exhibit hall is
            devoted to the technology of modern communications and its history
            of continuous development. The wing itself, 400 feet long, is
            covered with lightweight Fiberglas and rests on just four pylons.
            Next to it rises one of the tallest structures at the Fair, a
            140-foot microwave tower through which TV shows originating at
            the Fair are transmitted. Windows at the base of the tower look
            in on the control equipment and the engineers and monitors on
            duty.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "FROM DRUMBEAT TO TELSTAR.",
            body: (
              <>
                For the tour through communications history, the visitor, in a
                moving chair with earphones, is whisked through scenes showing
                the progress of man&apos;s efforts to communicate with others.
                Movies, stage sets and projected pictures tell the story with a
                three-dimensional effect, accompanied by music and narration.
              </>
            ),
          },
          {
            label: "TELEPHONES AND TIC-TAC-TOE.",
            body: (
              <>
                The technological exhibits in the lower level of the Bell
                pavilion are interspersed with games. Visitors may test their own
                musical pitch or they may play tic-tac-toe. The development of
                the telephone is illustrated, and guests may use actual
                &quot;picturephone&quot; instruments developed by Bell Telephone
                Laboratories (every 15 minutes the pavilion puts in a call to
                Disneyland in California). The Visible Speech exhibit transforms
                voices into visual symbols on a TV screen. The products of more
                than 80 years of research and development by the Bell System are
                on display. A large illuminated wall screen traces the various
                networks that tie together local, national and international
                calls.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/bell01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/bell01/bell-logo-1965.gif",
          width: 144,
          height: 115,
          alt: "",
        },
        name: "BELL SYSTEM",
        summary: (
          <>
            The history of communications, from smoke signal to satellites, is
            shown in a 15-minute ride
          </>
        ),
        copy: (
          <>
            The upper story of the pavilion, which houses the ride, is a
            gigantic &quot;floating wing&quot; that rests on four pylons. Below
            is an exhibit hall devoted to the technology of communications.
            Nearby rises a 140-foot microwave tower which transmits TV shows
            originating at the Fair.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "FROM TOM-TOM TO TELSTAR.",
            body: (
              <>
                The visitor, sitting in a moving armchair fitted with stereo
                earphones, sees filmed and three-dimensional scenes that include
                primitive signaling by drums, the development of the alphabet,
                the advent of the telephone and a communications satellite
                orbiting in space
              </>
            ),
          },
          {
            label: "PHONES AND FUN.",
            body: (
              <>
                In the exhibit hall, visitors can test their musical pitch or
                play tic-tac-toe. New &quot;see-as-you-talk&quot; picture-phones
                are demonstrated and children can listen to cartoon characters on
                special phones. In another exhibit, voices are transformed into
                visual symbols on a TV screen. The products of more than 80 years
                of research by the Bell System are also on display.
              </>
            ),
          },
          {
            label: "PUBLIC TELEPHONES.",
            body: (
              <>
                Telephone directories from most major cities may be consulted,
                and attendants help place calls anywhere in the world.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/bell01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/bell01/industry-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/bellmap",
      }}
    />
  );
}
