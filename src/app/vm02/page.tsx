import type { Metadata } from "next";
import { ViewMastersGalleryPage } from "@/components/ViewMastersGalleryPage";
import { ViewMastersNavChrome } from "@/components/ViewMastersNavChrome";

export const metadata: Metadata = {
  title:
    "Night Scenes & Amusement — The View-Masters Reels — nywf64.com",
  description:
    "View-Master Night Scenes & Amusement packet (A 672) — 21 stereo pictures of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Night Scenes & Amusement gallery (legacy vm03.html → /vm02).
 * Shared ViewMastersHero (1905×826). Nav Page 3 (overview is Page 1).
 * PREVIOUS → /vm01; NEXT → /vm03 (International Area).
 * HARD RULE — navy title banner beneath the attraction nav.
 */
export default function Vm02Page() {
  return (
    <ViewMastersGalleryPage
      title="Night Scenes & Amusement"
      titleId="vm02-title"
      packetName="NIGHT SCENES and AMUSEMENT AREA"
      packetNo="A 672"
      coverAccentColor="#ffff00"
      cover={{
        src: "/images/vm02/vmaa.jpg",
        width: 200,
        height: 201,
        alt: "Night Scenes & Amusement View-Master Packet",
      }}
      nav={<ViewMastersNavChrome />}
      previousHref="/vm01"
      overviewHref="/vmoverview"
      nextHref="/vm03"
      reels={[
        {
          label: "View-Master Reel One",
          slides: [
            {
              number: "01",
              caption: "Cover - Fountain and Fireworks",
              coverAccent: true,
              src: "/images/vm02/vmns01.jpg",
              width: 350,
              height: 277,
              alt: "Fountain & Fireworks",
            },
            {
              number: "02",
              caption: "Fountain of the Planets",
              src: "/images/vm02/vmns02.jpg",
              width: 350,
              height: 299,
              alt: "Fountain of the Planets",
            },
            {
              number: "03",
              caption: "Lights on G.E. Dome",
              src: "/images/vm02/vmns03.jpg",
              width: 350,
              height: 293,
              alt: "Lighted GE Dome",
            },
            {
              number: "04",
              caption: "Gleaming Thailand Pavilion",
              src: "/images/vm02/vmns04.jpg",
              width: 350,
              height: 352,
              alt: "Thailand",
            },
            {
              number: "05",
              caption: "Unisphere at Night",
              src: "/images/vm02/vmns05.jpg",
              width: 350,
              height: 289,
              alt: "Spectacular Unisphere Shot",
            },
            {
              number: "06",
              caption: "The Tower of Light",
              src: "/images/vm02/vmns06.jpg",
              width: 350,
              height: 250,
              alt: "Tower of Light",
            },
            {
              number: "07",
              caption: "Space Park Rocket Engines",
              src: "/images/vm02/vmns07.jpg",
              width: 350,
              height: 279,
              alt: "US Space Park",
            },
          ],
        },
        {
          label: "View-Master Reel Two",
          slides: [
            {
              number: "08",
              caption: "Heliport at Night",
              src: "/images/vm02/vmns08.jpg",
              width: 350,
              height: 326,
              alt: "Heliport & Chrysler Islands",
            },
            {
              number: "09",
              caption: "Lighted G.M. Facade",
              src: "/images/vm02/vmns09.jpg",
              width: 350,
              height: 320,
              alt: "GM Facade",
            },
            {
              number: "10",
              caption: "Chrysler Robot and Engine",
              src: "/images/vm02/vmns10.jpg",
              width: 350,
              height: 318,
              alt: "Chrysler Islands",
            },
            {
              number: "11",
              caption: '"Hell Drivers" at Auto Thrill Show',
              src: "/images/vm02/vmns11.jpg",
              width: 350,
              height: 316,
              alt: "Hell Drivers",
            },
            {
              number: "12",
              caption: "New York State Towers",
              src: "/images/vm02/vmns12.jpg",
              width: 350,
              height: 265,
              alt: "New York State Pavilion",
            },
            {
              number: "13",
              caption: "Astral Fountain and Vatican Pavilion at Night",
              src: "/images/vm02/vmns13.jpg",
              width: 350,
              height: 294,
              alt: "Vatican & Astral Fountain",
            },
            {
              number: "14",
              caption: "Illuminated Amusement Area",
              src: "/images/vm02/vmns14.jpg",
              width: 350,
              height: 277,
              alt: "Florida & Amusement Area",
            },
          ],
        },
        {
          label: "View-Master Reel Three",
          slides: [
            {
              number: "15",
              caption: "Porpoises in Florida Pav.",
              src: "/images/vm02/vmns15.jpg",
              width: 350,
              height: 322,
              alt: "Florida Porpoise Show",
            },
            {
              number: "16",
              caption: "Monorail and Station",
              src: "/images/vm02/vmns16.jpg",
              width: 350,
              height: 315,
              alt: "Monorail",
            },
            {
              number: "17",
              caption: 'The "Santa Maria"',
              src: "/images/vm02/vmns17.jpg",
              width: 350,
              height: 328,
              alt: "Santa Maria",
            },
            {
              number: "18",
              caption: "The Jaycopter Ride and a real helicopter",
              src: "/images/vm02/vmns18.jpg",
              width: 350,
              height: 316,
              alt: "Jaycopter Ride",
            },
            {
              number: "19",
              caption: "Log Flume Ride",
              src: "/images/vm02/vmns19.jpg",
              width: 350,
              height: 321,
              alt: "Log Flume Ride",
            },
            {
              number: "20",
              caption: "Kodak Pav. at Night",
              src: "/images/vm02/vmns20.jpg",
              width: 350,
              height: 254,
              alt: "Kodak Picture Tower",
            },
            {
              number: "21",
              caption: "Illuminated Solar Fountain",
              src: "/images/vm02/vmns21.jpg",
              width: 350,
              height: 314,
              alt: "Solar Fountain",
            },
          ],
        },
      ]}
    />
  );
}
