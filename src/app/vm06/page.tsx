import type { Metadata } from "next";
import { ViewMastersGalleryPage } from "@/components/ViewMastersGalleryPage";
import { ViewMastersNavChrome } from "@/components/ViewMastersNavChrome";

export const metadata: Metadata = {
  title: "Transportation Area — The View-Masters Reels — nywf64.com",
  description:
    "View-Master Transportation Area packet (A 676) — 21 stereo pictures of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Transportation Area gallery (legacy vm07.html → /vm06).
 * Shared ViewMastersHero (1905×826). Nav Page 7 (overview is Page 1).
 * PREVIOUS → /vm05; NEXT → /vmoverview (legacy more → vm01).
 * HARD RULE — navy title banner beneath the attraction nav.
 */
export default function Vm06Page() {
  return (
    <ViewMastersGalleryPage
      title="Transportation Area"
      titleId="vm06-title"
      packetName="TRANSPORTATION AREA"
      packetNo="A 676"
      coverAccentColor="#8080c0"
      cover={{
        src: "/images/vm06/vmta.jpg",
        width: 200,
        height: 198,
        alt: "Transportation Area Packet",
      }}
      nav={<ViewMastersNavChrome />}
      previousHref="/vm05"
      overviewHref="/vmoverview"
      nextHref="/vmoverview"
      reels={[
        {
          label: "View-Master Reel One",
          slides: [
            {
              number: "01",
              caption: "Area Panorama",
              src: "/images/vm06/vmtr01.jpg",
              width: 350,
              height: 325,
              alt: "Panorama",
            },
            {
              number: "02",
              caption: "General Motors Futurama",
              src: "/images/vm06/vmtr02.jpg",
              width: 350,
              height: 321,
              alt: "General Motors",
            },
            {
              number: "03",
              caption: "Futurama Ride - The Desert",
              src: "/images/vm06/vmtr03.jpg",
              width: 350,
              height: 314,
              alt: "GM Show Desert Scene",
            },
            {
              number: "04",
              caption: 'G.M.\'s "City of Lights"',
              src: "/images/vm06/vmtr04.jpg",
              width: 350,
              height: 290,
              alt: "GM City of the Future",
            },
            {
              number: "05",
              caption: "GMX - Experimental Car",
              src: "/images/vm06/vmtr05.jpg",
              width: 350,
              height: 315,
              alt: "GM Product Showcase",
            },
            {
              number: "06",
              caption: "Transportation and Travel Bldg.",
              src: "/images/vm06/vmtr06.jpg",
              width: 350,
              height: 315,
              alt: "Transportation & Travel Pavilion",
            },
            {
              number: "07",
              caption: "Mobil Economy Driving Game",
              src: "/images/vm06/vmtr07.jpg",
              width: 350,
              height: 316,
              alt: "Mobil Economy Run Game",
            },
          ],
        },
        {
          label: "View-Master Reel Two",
          slides: [
            {
              number: "08",
              caption: "Cover - Heliport",
              coverAccent: true,
              src: "/images/vm06/vmtr08.jpg",
              width: 350,
              height: 317,
              alt: "Heliport",
            },
            {
              number: "09",
              caption: "Panorama from Heliport",
              src: "/images/vm06/vmtr09.jpg",
              width: 350,
              height: 329,
              alt: "Panorama",
            },
            {
              number: "10",
              caption: "Chrysler Islands from Heliport",
              src: "/images/vm06/vmtr10.jpg",
              width: 350,
              height: 296,
              alt: "Chrysler Islands",
            },
            {
              number: "11",
              caption: "Avis Antique Car Ride",
              src: "/images/vm06/vmtr11.jpg",
              width: 350,
              height: 321,
              alt: "Avis Antique Cars",
            },
            {
              number: "12",
              caption: "Sinclair Dinoland",
              src: "/images/vm06/vmtr12.jpg",
              width: 350,
              height: 319,
              alt: "Sinclair Dinoland and US Rubber Tire",
            },
            {
              number: "13",
              caption: "U.S. Rubber - Tire Ferris Wheel",
              src: "/images/vm06/vmtr13.jpg",
              width: 350,
              height: 322,
              alt: "US Rubber Ferris Wheel",
            },
            {
              number: "14",
              caption: "Heliport at Night",
              src: "/images/vm06/vmtr14.jpg",
              width: 350,
              height: 315,
              alt: "Heliport Night",
            },
          ],
        },
        {
          label: "View-Master Reel Three",
          slides: [
            {
              number: "15",
              caption: "Chrysler Islands at Night",
              src: "/images/vm06/vmtr15.jpg",
              width: 350,
              height: 316,
              alt: "Chrysler Night",
            },
            {
              number: "16",
              caption: "Avenue of Transportation",
              src: "/images/vm06/vmtr16.jpg",
              width: 350,
              height: 321,
              alt: "Avenue of Transportation",
            },
            {
              number: "17",
              caption: "Ford Rotunda and Convertible Ride",
              src: "/images/vm06/vmtr17.jpg",
              width: 350,
              height: 315,
              alt: "Ford Rotunda",
            },
            {
              number: "18",
              caption: "Triceratops - Ford Ride",
              src: "/images/vm06/vmtr18.jpg",
              width: 350,
              height: 305,
              alt: "Ford Show - Triceratops",
            },
            {
              number: "19",
              caption: "Caveman Scene - Ford Ride",
              src: "/images/vm06/vmtr19.jpg",
              width: 350,
              height: 309,
              alt: "Ford Show - Cavemen",
            },
            {
              number: "20",
              caption: "Ford's Future Automobile",
              src: "/images/vm06/vmtr20.jpg",
              width: 350,
              height: 320,
              alt: "Ford Product Showcase",
            },
            {
              number: "21",
              caption: "U.S. Space Park",
              src: "/images/vm06/vmtr21.jpg",
              width: 350,
              height: 322,
              alt: "US Space Park",
            },
          ],
        },
      ]}
    />
  );
}
