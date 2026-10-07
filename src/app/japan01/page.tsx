import type { Metadata } from "next";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Japan — nywf64.com",
  description:
    "Japan pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy japan01.html. Layout: GuidebookSouvenirPage (/bell01 standard). */
export default function Japan01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Japan"
      titleId="japan01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/japanoverview/hero-banner.jpg",
        alt: "Japan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JapanNavChrome />}
      previousHref="/japanoverview"
      nextHref="/japan02"
      guide1964={{
        cover: {
          src: "/images/japan01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/japan01/japanlogo64.gif",
          width: 144,
          height: 70,
          alt: "",
        },
        name: "JAPAN",
        copy: (
          <>
            Rockets for space research, model trains and tea ceremonies, and an
            array of consumer products are part of a presentation which
            emphasizes the differences between the new Japan and the old. Side by
            side with some of the world&apos;s most advanced microscopes,
            cameras, automobiles and industrial machines are charming evidences
            of the quiet, cultured but totally nonindustrial Japan of only 100
            years ago. The pavilion buildings combine the graceful architecture
            of ancient Japan with contemporary designs. On an outdoor stage,
            fireworks, Judo tournaments, fashion shows and dance programs are
            scheduled. There are two Japanese restaurants, an American-style
            snack bar, and a roof garden serving Japanese beer.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "A CENTURY OF PROGRESS.",
            body: (
              <>
                Japan&apos;s rapid emergence as an industrial nation is shown in
                photographs of Tokyo as it is now and as it was 100 years ago,
                just after U.S. Commodore Matthew Perry opened the nation to
                trade with the West. Examples of current scientific and
                industrial progress are shown in many exhibits. Among them:
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>Probers of space</em>. Japanese-made rockets hang prominently
                in the center of the building. A portable planetarium which
                projects man-made satellites as well as the solar system is on
                display.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>New tools of science</em> share another display. An electron
                microscope is shown which can photograph the smallest particles
                of matter, enlarging them two million times. Near it is a newly
                developed motion picture camera that can take one million frames
                per second.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>Symbols of industry</em> include a replica of the
                world&apos;s largest tanker, the <em>Nissho Maru</em> (132,200
                tons), and a scale model of the world&apos;s fastest express
                train (160 miles per hour). An elaborate miniature railroad
                system emphasizes Japan&apos;s railroading skills.
              </>
            ),
          },
          {
            label: "THE NEW JAPAN.",
            body: (
              <>
                The second building, reached by a ramp from the first, offers an
                array of consumer goods - sports cars, motorcycles, frozen foods,
                sewing machines - plus demonstrations of flower arranging and
                the ritualistic Japanese tea ceremony. A model rocket gives the
                visitor who steps inside it the sensation of space travel. At
                the press of a button, an electronic computer provides
                information on how to get almost anywhere in the world. A stand
                sells Japanese made products, including color TV sets.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            body: (
              <>
                In the third building, called the House of Japan, are the two
                restaurants, which serve foods such as <em>sukiyaki</em> and{" "}
                <em>tempura</em>. The first, on the main floor, caters to diners
                who prefer Western tables and chairs. The second, on a mezzanine,
                serves meals the Japanese way - on low tables with the diners
                sitting on straw mats. Diners at both may see stage shows which
                present glimpses of Japanese theater and dance.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/japan01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/japan01/japanlogo.gif",
          width: 144,
          height: 70,
          alt: "",
        },
        name: "JAPAN",
        nameFace: "arial",
        summary: (
          <>
            Executive aircraft, cameras and a high-speed computer share space
            with ancient tea ceremonies behind a finely sculptured stone wall.
          </>
        ),
        copy: (
          <>
            Side by side with some of the world&apos;s most advanced microscopes
            and industrial machines are charming evidences of the quiet rural
            Japan of a century ago. Judo tournaments, fashion shows and dance
            programs are held on an outdoor stage. There are also a restaurant, a
            snack bar and a roof garden that serves Japanese beer.
          </>
        ),
        highlights: [
          {
            label: "CENTURY OF PROGRESS.",
            labelFace: "arial",
            body: (
              <>
                Photographs of Tokyo as it is today, reflect the emergence of
                Japan into the industrial age.
                <br />
                <br />
                A Japanese-made private plane hangs in the center of the
                building. Nearby is a movie camera that can take one million
                frames per second.
                <br />
                <br />A replica of the <em>Nissho Maru</em>, one of the
                world&apos;s largest tankers, is on display, along with a scale
                model of the world&apos;s fastest express train. An elaborate
                miniature railroad system emphasizes Japan&apos;s transportation
                skills.
              </>
            ),
          },
          {
            label: "THE NEW JAPAN.",
            labelFace: "arial",
            body: (
              <>
                Displays of consumer goods such as sports cars, motorcycles,
                cameras and sewing machines are housed in a second building.
                Demonstrations of the tea ceremony and flower-arranging
                techniques are given.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            labelFace: "arial",
            body: (
              <>
                In a third building, Japanese dishes such as <em>sukiyaki</em>{" "}
                and <em>tempura</em> are served. Patrons may choose between
                Western service or the ritual of Japanese-style dining, in which
                guests sit on mats around low tables.
              </>
            ),
          },
        ],
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/japan01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/japan01/intsmlmap.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/japanmap",
      }}
    />
  );
}
