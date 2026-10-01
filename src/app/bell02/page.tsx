import type { Metadata } from "next";
import { BellNavChrome } from "@/components/BellNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Bell System — nywf64.com",
  description:
    "Bell System Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bell System Information Manual page — “manual” standard.
 * Body from legacy bell02.html. Layout: InformationManualPage (/bell02).
 */
export default function Bell02Page() {
  return (
    <InformationManualPage
      heroLabel="Bell System Pavilion"
      titleId="bell02-title"
      hero={{
        src: "/images/belloverview/hero-banner.jpg",
        alt: "Bell System Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BellNavChrome />}
      previousHref="/bell01"
      overviewHref="/belloverview"
      nextHref="/bellpostcards"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["The Bell System Exhibit"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. James T. Horris and",
            "Mr. Joseph P. Crotty",
            "New York Telephone Company",
            "61 Broadway, Room 2424",
            "New York 6, New York",
            "394-6750",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Miss Phyllis Adams"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["May 19, 1961"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 10; Lot 1", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["104,938 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Harrison & Ambramovitz",
            "630 Fifth Avenue",
            "New York 20, New York",
            "CO 5-4884",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["George A. Fuller Construction Co."],
        },
      ]}
      primaryFigure={{
        src: "/images/bell02/line-drawing.jpg",
        width: 600,
        height: 353,
        alt: "Bell System line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          label: "Exterior",
          body: (
            <>
              The Bell System Exhibit is a gleaming white wing that appears to
              be floating in air. It is 400 feet long, 24 feet above the ground
              and is supported at only four points.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              The Exhibit is composed of two major elements - the ride in the
              floating wing and a series of live demonstrations, displays and
              audience-participation games in the Exhibit Hall located in the
              lower level of the pavilion.
            </>
          ),
        },
        {
          label: "Upper level",
          body: (
            <>
              An escalator carries fairgoers to the upper level where they are
              transported in contour armchairs through a series of 50 different
              scenes. Three-dimensional stage settings, film technique that is
              three dimensional in nature, and front and rear projections of
              still and motion pictures are used to show how man has met his
              need and desire to communicate. The 12-minute trip traces man&apos;s
              achievements from the development of primitive drum and smoke
              signaling to the creation of complex networks for worldwide and
              space communications.
              <br />
              <br />
              Narration and music of this original presentation is heard through
              stereophonic sound systems in each armchair.
              <br />
              <br />
              Jo Mielziner designed and produced the ride, the scenery and film,
              and Morton Gould composed the original score.
            </>
          ),
        },
        {
          label: "Lower Level",
          body: (
            <>
              The exhibit hall is entered directly from the ride or from the
              promenade facing the Pool of Industry.
              <br />
              <br />
              The displays, demonstrations and games in the Exhibit Hall are
              designed to tell the story of how the Bell System, through science
              and technology, has in the past and will continue to make
              communicating easier and better for everyone, everywhere.
              <br />
              <br />
              The{" "}
              <span className={manualStyles.u}>Senses Area</span>{" "}
              examines speech, vision and hearing. There are two major exhibits -
              a demonstration of Visible Speech and Voice Prints, and one of the
              Artificial Larynx and the Vocoder.
              <br />
              <br />
              The Visible Speech exhibit features an isolation booth in which a
              volunteer from the audience reads a sentence. His speech patterns
              appear to the audience on a television screen, and can be read
              from them by a demonstrator. A print of his voice, on paper, will
              be given to the volunteer as a souvenir.
              <br />
              <br />
              The Vocoder exhibit shows how this experimental machine samples
              the voice, selecting only parts for transmission and reconstructing
              them into a complete conversation at the receiving end.
              <br />
              <br />
              Visitors are able to test their skills at pitch matching and by
              participating in an optical illusion game.
              <br />
              <br />
              The <span className={manualStyles.u}>
                Basic Science Exhibit
              </span>{" "}
              demonstrates crystal growth and other results of scientific
              research - the transistor, solar battery, Maser and Laser.
              <br />
              <br />
              Underseas cable routes and how they operate are shown in the{" "}
              <span className={manualStyles.u}>
                Tasi Complexity Exhibit
              </span>
              . To support this exhibit, there are logic and memory games, an
              age guessing game, a Roman numeral translator and a Tic-Tac-Toe
              game.
              <br />
              <br />
              The{" "}
              <span className={manualStyles.u}>
                Television Telephone
              </span>{" "}
              is an actual research project conducted by Bell Telephone
              Laboratories.
              <br />
              <br />
              The{" "}
              <span className={manualStyles.u}>
                Manufacturing Exhibit
              </span>{" "}
              tells the story of precision manufacturing and reliability of
              equipment using a background photo mural of the Western Electric
              Company plant in Indianapolis. There are demonstrations of machine
              testing of telephone instruments. In addition, an overhead
              conveyor, about 400 feet long, carries examples of many of the
              products manufactured by the Western Electric Company.
              <br />
              <br />
              In addition, the Bell System pavilion provides exhibits of{" "}
              <span className={manualStyles.u}>
                Telephones of Today and Vision
              </span>
              ,{" "}
              <span className={manualStyles.u}>Waves Exhibit</span>
              , and the{" "}
              <span className={manualStyles.u}>Data Exhibit</span>.
              <br />
              <br />
              In a display of moving multi-color lights on a treated plexi-glass
              wall which wraps almost halfway around a circular theater, the{" "}
              <span className={manualStyles.u}>Network Story</span>{" "}
              is told. The story builds from a single call to the nationwide
              network, ultimately into space through Telstar and the Maser or
              Laser.
              <br />
              <br />
              The{" "}
              <span className={manualStyles.u}>
                Television Operating Center
              </span>{" "}
              is a fully-equipped control center for all television programs at
              the Fair.
              <br />
              <br />
              <span className={manualStyles.u}>Tower</span>: An
              adjacent 140-foot (14 story) microwave tower is equipped to handle
              incoming and outgoing television and data transmission. Its base
              is glass-enclosed so fairgoers can see the control equipment and
              monitors presenting the programs being broadcast.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/bell02/produced-photo.jpg",
        width: 600,
        height: 372,
        alt: "The Bell System Pavilion",
        bordered: true,
        title: "The Bell System",
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
