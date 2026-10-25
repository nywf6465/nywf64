import type { Metadata } from "next";
import { ViewMastersGalleryPage } from "@/components/ViewMastersGalleryPage";
import { ViewMastersNavChrome } from "@/components/ViewMastersNavChrome";

export const metadata: Metadata = {
  title: "General Tour — The View-Masters Reels — nywf64.com",
  description:
    "View-Master General Tour packet (A 671) — 21 stereo pictures of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Tour gallery (legacy vm02.html → /vm01).
 * Shared ViewMastersHero (1905×826). Nav Page 2 (overview is Page 1).
 * PREVIOUS → /vmoverview; NEXT hidden until /vm02 ships.
 * HARD RULE — navy title banner beneath the attraction nav.
 */
export default function Vm01Page() {
  return (
    <ViewMastersGalleryPage
      title="General Tour"
      titleId="vm01-title"
      packetName="General Tour"
      packetNo="A 671"
      cover={{
        src: "/images/vm01/vmgt.jpg",
        width: 200,
        height: 201,
        alt: "General Tour View-Master Packet",
      }}
      nav={<ViewMastersNavChrome />}
      previousHref="/vmoverview"
      overviewHref="/vmoverview"
      hideNext
      reels={[
        {
          label: "View-Master Reel One",
          slides: [
            {
              number: "01",
              caption: "Cover - Unisphere and Flags",
              coverAccent: true,
              src: "/images/vm01/vmgt01.jpg",
              width: 350,
              height: 321,
              alt: "Unisphere and Flags",
            },
            {
              number: "02",
              caption: "Astral Fountain & Vatican Pav.",
              src: "/images/vm01/vmgt02.jpg",
              width: 350,
              height: 319,
              alt: "Astral Fountain & Vatican",
            },
            {
              number: "03",
              caption: "New York State Towers - high point of Fair",
              src: "/images/vm01/vmgt03.jpg",
              width: 350,
              height: 318,
              alt: "New York State Pavilion",
            },
            {
              number: "04",
              caption: 'General Motors "Futurama"',
              src: "/images/vm01/vmgt04.jpg",
              width: 350,
              height: 318,
              alt: "General Motors - Night",
            },
            {
              number: "05",
              caption: '"City of Future" - G.M.',
              src: "/images/vm01/vmgt05.jpg",
              width: 350,
              height: 313,
              alt: "GM - City of the Future",
            },
            {
              number: "06",
              caption: "Chrysler Islands from Heliport",
              src: "/images/vm01/vmgt06.jpg",
              width: 350,
              height: 324,
              alt: "Chrysler Islands from Heliport",
            },
            {
              number: "07",
              caption: "Disney's \"Cavemen\" - Ford's Convertible Ride",
              src: "/images/vm01/vmgt07.jpg",
              width: 350,
              height: 313,
              alt: "Ford Magic Skyway Ride",
            },
          ],
        },
        {
          label: "View-Master Reel Two",
          slides: [
            {
              number: "08",
              caption: "Golden Thailand Pavilion",
              src: "/images/vm01/vmgt08.jpg",
              width: 350,
              height: 320,
              alt: "Thailand",
            },
            {
              number: "09",
              caption: 'G.E.\'s "Today\'s Living Room"',
              src: "/images/vm01/vmgt09.jpg",
              width: 350,
              height: 273,
              alt: "GE Modern Living Room",
            },
            {
              number: "10",
              caption: "Fountain and Fireworks",
              src: "/images/vm01/vmgt10.jpg",
              width: 350,
              height: 296,
              alt: "Fountain & Fireworks",
            },
            {
              number: "11",
              caption: "Industrial Area Panorama",
              src: "/images/vm01/vmgt11.jpg",
              width: 350,
              height: 322,
              alt: "Industrial Area",
            },
            {
              number: "12",
              caption: "Tower of Light and G.E. Dome",
              src: "/images/vm01/vmgt12.jpg",
              width: 350,
              height: 320,
              alt: "Tower of Light & GE",
            },
            {
              number: "13",
              caption: "Pepsi-Cola's \"Small World'",
              src: "/images/vm01/vmgt13.jpg",
              width: 350,
              height: 309,
              alt: 'Pepsi "Small World"',
            },
            {
              number: "14",
              caption: "Monorail and Amusement Area",
              src: "/images/vm01/vmgt14.jpg",
              width: 350,
              height: 324,
              alt: "Monorail",
            },
          ],
        },
        {
          label: "View-Master Reel Three",
          slides: [
            {
              number: "15",
              caption: "Fountain of the Fairs",
              src: "/images/vm01/vmgt15.jpg",
              width: 350,
              height: 321,
              alt: "Fountain of the Fairs",
            },
            {
              number: "16",
              caption: "International Area",
              src: "/images/vm01/vmgt16.jpg",
              width: 350,
              height: 321,
              alt: "International Area from Skyride",
            },
            {
              number: "17",
              caption: "Indonesian Pavilion",
              src: "/images/vm01/vmgt17.jpg",
              width: 350,
              height: 320,
              alt: "Indonesia",
            },
            {
              number: "18",
              caption: "Republic of China Palace",
              src: "/images/vm01/vmgt18.jpg",
              width: 350,
              height: 322,
              alt: "Republic of China",
            },
            {
              number: "19",
              caption: "Heliport and New York Skyline",
              src: "/images/vm01/vmgt19.jpg",
              width: 350,
              height: 321,
              alt: "Transportation Area",
            },
            {
              number: "20",
              caption:
                "Unisphere and New Jersey Pav. NYS Observation Tower",
              src: "/images/vm01/vmgt20.jpg",
              width: 350,
              height: 320,
              alt: "Panorama",
            },
            {
              number: "21",
              caption: "Night Panorama",
              src: "/images/vm01/vmgt21.jpg",
              width: 350,
              height: 267,
              alt: "Night Panorama",
            },
          ],
        },
      ]}
    />
  );
}
