import type { Metadata } from "next";
import { ViewMastersGalleryPage } from "@/components/ViewMastersGalleryPage";
import { ViewMastersNavChrome } from "@/components/ViewMastersNavChrome";

export const metadata: Metadata = {
  title: "Federal & State Area — The View-Masters Reels — nywf64.com",
  description:
    "View-Master Federal & State Area packet (A 674) — 21 stereo pictures of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Federal & State Area gallery (legacy vm05.html → /vm04).
 * Shared ViewMastersHero (1905×826). Nav Page 5 (overview is Page 1).
 * PREVIOUS → /vm03; NEXT hidden until /vm05 ships.
 * HARD RULE — navy title banner beneath the attraction nav.
 */
export default function Vm04Page() {
  return (
    <ViewMastersGalleryPage
      title="Federal & State Area"
      titleId="vm04-title"
      packetName="FEDERAL and STATE AREA"
      packetNo="A 674"
      coverAccentColor="#009900"
      cover={{
        src: "/images/vm04/vmsa.jpg",
        width: 200,
        height: 199,
        alt: "State Area View-Master Packet",
      }}
      nav={<ViewMastersNavChrome />}
      previousHref="/vm03"
      overviewHref="/vmoverview"
      hideNext
      reels={[
        {
          label: "View-Master Reel One",
          slides: [
            {
              number: "01",
              caption: "Cover - New York State Pav.",
              coverAccent: true,
              src: "/images/vm04/vmfs01.jpg",
              width: 350,
              height: 347,
              alt: "New York State Towers",
            },
            {
              number: "02",
              caption: "NYS, Tent of Tomorrow",
              src: "/images/vm04/vmfs02.jpg",
              width: 350,
              height: 365,
              alt: "New York State Interior",
            },
            {
              number: "03",
              caption: "New Jersey and Unisphere",
              src: "/images/vm04/vmfs03.jpg",
              width: 350,
              height: 328,
              alt: "New Jersey & Unisphere",
            },
            {
              number: "04",
              caption: "Alaska and Westinghouse",
              src: "/images/vm04/vmfs04.jpg",
              width: 350,
              height: 369,
              alt: "Westinghouse & Alaska",
            },
            {
              number: "05",
              caption: "Westinghouse Time Capsule",
              src: "/images/vm04/vmfs05.jpg",
              width: 350,
              height: 335,
              alt: "Westinghouse Time Capsule",
            },
            {
              number: "06",
              caption: "Florida Pavilion Tower",
              src: "/images/vm04/vmfs06.jpg",
              width: 350,
              height: 285,
              alt: "Florida Citrus Tower",
            },
            {
              number: "07",
              caption: "Florida at Night",
              src: "/images/vm04/vmfs07.jpg",
              width: 350,
              height: 326,
              alt: "Florida Tower Night",
            },
          ],
        },
        {
          label: "View-Master Reel Two",
          slides: [
            {
              number: "08",
              caption: "Lindbergh's Plane in Missouri Pavilion",
              src: "/images/vm04/vmfs08.jpg",
              width: 350,
              height: 322,
              alt: "Missouri Interior",
            },
            {
              number: "09",
              caption: "Ice show and NYC Pavilion",
              src: "/images/vm04/vmfs09.jpg",
              width: 350,
              height: 309,
              alt: "New York City Pavilion",
            },
            {
              number: "10",
              caption: "New England Country Store",
              src: "/images/vm04/vmfs10.jpg",
              width: 350,
              height: 333,
              alt: "New England Country Store",
            },
            {
              number: "11",
              caption: "New England City Diorama",
              src: "/images/vm04/vmfs11.jpg",
              width: 350,
              height: 330,
              alt: "New England Diorama",
            },
            {
              number: "12",
              caption: "Hollywood, U.S.A. Pavilion",
              src: "/images/vm04/vmfs12.jpg",
              width: 350,
              height: 311,
              alt: "Hollywood Pavilion",
            },
            {
              number: "13",
              caption: "Oklahoma Relief Map",
              src: "/images/vm04/vmfs13.jpg",
              width: 350,
              height: 339,
              alt: "Oklahoma Map",
            },
            {
              number: "14",
              caption: "Hopi Indian Dance at New Mexico Pueblo Pavilion",
              src: "/images/vm04/vmfs14.jpg",
              width: 350,
              height: 344,
              alt: "New Mexico Dancers",
            },
          ],
        },
        {
          label: "View-Master Reel Three",
          slides: [
            {
              number: "15",
              caption: "Lincoln Statue - Illinois Pav.",
              src: "/images/vm04/vmfs15.jpg",
              width: 350,
              height: 314,
              alt: "Illinois Courtyard",
            },
            {
              number: "16",
              caption: "L.I. RR's Miniature Train",
              src: "/images/vm04/vmfs16.jpg",
              width: 350,
              height: 311,
              alt: "Long Island Railroad",
            },
            {
              number: "17",
              caption: "W. Va. Hand-Blown Glass",
              src: "/images/vm04/vmfs17.jpg",
              width: 350,
              height: 303,
              alt: "West Virginia Glass",
            },
            {
              number: "18",
              caption: "Seafood Wharf, Maryland Pav.",
              src: "/images/vm04/vmfs18.jpg",
              width: 350,
              height: 314,
              alt: "Maryland Restaurant",
            },
            {
              number: "19",
              caption: "United States Pavilion",
              src: "/images/vm04/vmfs19.jpg",
              width: 350,
              height: 318,
              alt: "United States Pavilion",
            },
            {
              number: "20",
              caption: "Venus Space Probe in the U.S. Pavilion",
              src: "/images/vm04/vmfs20.jpg",
              width: 350,
              height: 278,
              alt: "US Pavilion Interior",
            },
            {
              number: "21",
              caption: "Unisphere at Night",
              src: "/images/vm04/vmfs21.jpg",
              width: 350,
              height: 290,
              alt: "Unisphere & Fountains",
            },
          ],
        },
      ]}
    />
  );
}
