import type { Metadata } from "next";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Travelers Insurance — nywf64.com",
  description:
    "Travelers Insurance entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Travelers Insurance guidebook page.
 * Body from legacy travelers01.html. Layout: GuidebookSouvenirPage.
 */
export default function Travelers01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Travelers Insurance"
      titleId="travelers01-title"
      hero={{
        src: "/images/travelersoverview/hero-banner.jpg",
        alt: "Travelers Insurance at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TravelersNavChrome />}
      previousHref="/travelersoverview"
      nextHref="/travelers02"
      guide1964={{
        cover: {
          src: "/images/travelers01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/travelers01/trvlrslogo64.gif",
          width: 144,
          height: 109,
          alt: "",
        },
        name: (
          <>
            TRAVELERS
            <br />
            INSURANCE
          </>
        ),
        copy: (
          <>
            In this pavilion, which seems to float on jets of water, the
            two-and-a-half-billion-year story of life on earth is portrayed,
            beginning with the earliest cell and culminating in modern man&apos;s
            leap into space. Under the red dome that symbolizes the Travelers
            umbrella of protection, 13 dioramas use life-sized models, stage sets
            and sound and lighting effects to re-create the most crucial eras and
            events of the exhibit&apos;s theme, &quot;The Triumph of Man.&quot;
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "BIRTH OF THE EARTH.",
            body: (
              <>
                The approach to the pavilion is through an 80-foot covered
                walkway, which has along its length a glass-and-plastic mural
                depicting the origins of our planet.
              </>
            ),
          },
          {
            label: "BEGINNING OF LIFE.",
            body: (
              <>
                On the ground level is a three-dimensional display that traces
                the evolution of life from one-celled organisms to early land
                creatures. Realistic lighting and sounds create the subaqueous
                atmosphere in which this journey began.
              </>
            ),
          },
          {
            label: "THE PROGRESS OF MAN.",
            body: (
              <>
                One and a half million years of human progress are reviewed in a
                21-minute tour of the 13 dioramas that cover the second floor.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>In the earliest periods,</em> tools are invented, fire is
                discovered and art and religion developed.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>Early farms and cities</em> indicate the beginnings of
                civilization.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>The Roman era</em> is shown at its peak, and during its
                decline under barbarian attack.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>The darkness of the Middle Ages</em> is epitomized by the
                perils of the Black Death, which ravaged Europe for centuries.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>The rise of modern man</em> is shown by Copernicus&apos;
                theory that the earth revolves around the sun and by
                Columbus&apos; voyage of discovery.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>Pioneers tame America,</em> and the United States faces and
                surmounts the trials of the Civil War.
                <br />
                <br />
                <strong>
                  <em>&para; </em>
                </strong>
                <em>In the final display,</em> man is seen on the verge of yet
                another triumph, the exploration of space.
              </>
            ),
          },
          {
            label: "THE COMPANY TODAY.",
            body: (
              <>
                Several exhibits relating to The Travelers are at the end of the
                pavilion. They stress the protection insurance affords families,
                businesses and communities; there is also a center where
                questions about insurance are answered. Visitors may obtain an
                illustrated booklet and record dealing with The Triumph of Man
                exhibit.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/travelers01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/travelers01/trvlrslogo.gif",
          width: 144,
          height: 109,
          alt: "",
        },
        name: "TRAVELERS INSURANCE",
        nameFace: "arial",
        summary: (
          <>
            Visitors walk past dioramas that dramatize the story of life on
            earth, from the first cell to man&apos;s leap into space.
          </>
        ),
        copy: (
          <>
            The pavilion, which is modeled after Travelers&apos; well-known red
            umbrella trademark, seems to float on jets of water. At the entrance
            an 80-foot mural depicts the earth&apos;s fiery origins, and a
            display inside traces the beginnings of life.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "TRIUMPH OF MAN.",
            body: (
              <>
                Human progress from the cave to the space capsule is reviewed in
                a tour of 13 dioramas. Some show man inventing tools, discovering
                fire and worshiping primitive gods, then starting civilizations
                with farms and cities. Others depict the rise and fall of Rome,
                Columbus&apos; voyages, America&apos;s pioneers and the Civil
                War. The final scene shows man entering the Space Age.
              </>
            ),
          },
          {
            label: "TRAVELERS TODAY.",
            body: (
              <>
                Company exhibits explain the protection that various kinds of
                insurance afford, and attendants answer questions.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/travelers01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/travelers01/indsmlmap.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/travelersmap",
      }}
    />
  );
}
