import type { Metadata } from "next";
import Link from "next/link";
import { UsrubNavChrome } from "@/components/UsrubNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";
import photoStyles from "@/styles/photographsPage.module.css";

export const metadata: Metadata = {
  title: "Photograph Album — U.S. Rubber — nywf64.com",
  description:
    "Bill Cotter photographs of the U.S. Rubber giant tire at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const BILL_COTTER_SOURCE = "SOURCE: © Copyright Bill Cotter Collection";

/**
 * U.S. Rubber — Bill Cotter photograph gallery.
 * Body from legacy usrub06.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (“photographs” standard).
 */
export default function Usrub06Page() {
  return (
    <PhotographsPage
      heroLabel="U.S. Rubber"
      titleId="usrub06-title"
      title="Photograph Album"
      hero={{
        src: "/images/usruboverview/hero-banner.jpg",
        alt: "U.S. Rubber at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UsrubNavChrome />}
      previousHref="/usrub05"
      overviewHref="/usruboverview"
      nextHref="/usrub07"
      intro={
        <div className={photoStyles.introBox}>
          <p>
            <span className={photoStyles.introAccent}>Bill Cotter</span>, World&apos;s
            Fair enthusiast, has been collecting images of the 1964/1965 New York
            World&apos;s Fair for many years. He shares with us here some excellent
            views the{" "}
            <span className={photoStyles.introAccentItalic}>
              US Royal Giant Tire Ferris Wheel
            </span>
            . If you would like to see more photos from Bill&apos;s fabulous collection
            of World&apos;s Fair images, visit his website at{" "}
            <Link
              className={photoStyles.introLink}
              href="http://www.worldsfairphotos.com/"
              target="_blank"
              rel="noreferrer"
            >
              WorldsFairPhotos.com
            </Link>
            .
          </p>
        </div>
      }
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/usrub06/usrub25.jpg",
                width: 400,
                height: 390,
                alt: "Transportation Area showing the U.S. Rubber Ferris Wheel as seen from the Grand Central Parkway",
              },
              title:
                "Transportation Area showing the U.S. Rubber Ferris Wheel as seen from the Grand Central Parkway",
              source: BILL_COTTER_SOURCE,
            },
            {
              image: {
                src: "/images/usrub06/usrub21.jpg",
                width: 273,
                height: 371,
                alt: "U.S. Rubber Exhibit as seen from the top of the New York State Pavilion Observation Tower",
              },
              title:
                "U.S. Rubber Exhibit as seen from the top of the New York State Pavilion Observation Tower",
              source: BILL_COTTER_SOURCE,
            },
            {
              image: {
                src: "/images/usrub06/usrub20.jpg",
                width: 400,
                height: 270,
                alt: "U.S. Rubber's Giant Tire Ferris Wheel",
              },
              title: "U.S. Rubber's Giant Tire Ferris Wheel",
              source: BILL_COTTER_SOURCE,
            },
            {
              image: {
                src: "/images/usrub06/usrub23.jpg",
                width: 400,
                height: 261,
                alt: "Close-up of the Wheel's Gondolas",
              },
              title: "Close-up of the Wheel's Gondolas",
              source: BILL_COTTER_SOURCE,
            },
            {
              image: {
                src: "/images/usrub06/usrub01.jpg",
                width: 294,
                height: 460,
                alt: "U.S. Rubber Exhibit",
              },
              title: "U.S. Rubber Exhibit",
              source: BILL_COTTER_SOURCE,
            },
            {
              image: {
                src: "/images/usrub06/usrub22.jpg",
                width: 400,
                height: 269,
                alt: "The Tire illuminated at Night",
              },
              title: "The Tire illuminated at Night",
              source: BILL_COTTER_SOURCE,
            },
          ],
        },
      ]}
    />
  );
}
