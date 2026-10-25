import type { Metadata } from "next";
import { ViewMastersGalleryPage } from "@/components/ViewMastersGalleryPage";
import { ViewMastersNavChrome } from "@/components/ViewMastersNavChrome";

export const metadata: Metadata = {
  title: "Industrial Area — The View-Masters Reels — nywf64.com",
  description:
    "View-Master Industrial Area packet (A 675) — 21 stereo pictures of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Industrial Area gallery (legacy vm06.html → /vm05).
 * Shared ViewMastersHero (1905×826). Nav Page 6 (overview is Page 1).
 * PREVIOUS → /vm04; NEXT → /vm06 (Transportation Area).
 * HARD RULE — navy title banner beneath the attraction nav.
 */
export default function Vm05Page() {
  return (
    <ViewMastersGalleryPage
      title="Industrial Area"
      titleId="vm05-title"
      packetName="INDUSTRIAL AREA"
      packetNo="A 675"
      coverAccentColor="#800040"
      cover={{
        src: "/images/vm05/vmia.jpg",
        width: 200,
        height: 199,
        alt: "Industrial View-Master Packet",
      }}
      nav={<ViewMastersNavChrome />}
      previousHref="/vm04"
      overviewHref="/vmoverview"
      nextHref="/vm06"
      reels={[
        {
          label: "View-Master Reel One",
          slides: [
            {
              number: "01",
              caption: "Cover - Tower of Light",
              coverAccent: true,
              src: "/images/vm05/vmin01.jpg",
              width: 350,
              height: 306,
              alt: "Tower of Light",
            },
            {
              number: "02",
              caption: "Electrical Fantasy - Interior",
              src: "/images/vm05/vmin02.jpg",
              width: 350,
              height: 341,
              alt: "Ben & Sam the Eagle in Tower of Light Show",
            },
            {
              number: "03",
              caption: "General Electric Dome",
              src: "/images/vm05/vmin03.jpg",
              width: 350,
              height: 318,
              alt: "GE & Fountains",
            },
            {
              number: "04",
              caption: 'G.E.\'s "1920 Kitchen"',
              src: "/images/vm05/vmin04.jpg",
              width: 350,
              height: 250,
              alt: "1920's Kitchen in GE Show",
            },
            {
              number: "05",
              caption: 'G.E.\'s "Today\'s Living Room"',
              src: "/images/vm05/vmin05.jpg",
              width: 350,
              height: 245,
              alt: "Modern Living Room - GE Show",
            },
            {
              number: "06",
              caption: 'Kodak roof and giant "slides"',
              src: "/images/vm05/vmin06.jpg",
              width: 350,
              height: 316,
              alt: "Kodak Moon Roof & Picture Tower",
            },
            {
              number: "07",
              caption: "Better Living Bldg. - Night",
              src: "/images/vm05/vmin07.jpg",
              width: 350,
              height: 294,
              alt: "Better Living Bldg. from Pepsi Pavilion",
            },
          ],
        },
        {
          label: "View-Master Reel Two",
          slides: [
            {
              number: "08",
              caption:
                'Pepsi-Cola Ride - Disney\'s "Small World - India"',
              src: "/images/vm05/vmin08.jpg",
              width: 350,
              height: 320,
              alt: 'Pepsi "Small World" Ride',
            },
            {
              number: "09",
              caption:
                "Panorama of Fair from the Better Living Building",
              src: "/images/vm05/vmin09.jpg",
              width: 350,
              height: 314,
              alt: "Industrial Area Panorama",
            },
            {
              number: "10",
              caption: "Continuation of Panorama",
              src: "/images/vm05/vmin10.jpg",
              width: 350,
              height: 320,
              alt: "Industrial Area and Fountains",
            },
            {
              number: "11",
              caption:
                "Industrial Area and Fountain of Fairs from Sky Ride",
              src: "/images/vm05/vmin11.jpg",
              width: 350,
              height: 319,
              alt: "Fountains of the Fair & Main Mall",
            },
            {
              number: "12",
              caption: "Inside Bell Telephone Exhibit",
              src: "/images/vm05/vmin12.jpg",
              width: 350,
              height: 285,
              alt: "Bell System Ride",
            },
            {
              number: "13",
              caption: "Travelers Umbrella Pavilion",
              src: "/images/vm05/vmin13.jpg",
              width: 350,
              height: 321,
              alt: "Travelers Insurance",
            },
            {
              number: "14",
              caption: '"Roman Forum" in Travelers',
              src: "/images/vm05/vmin14.jpg",
              width: 350,
              height: 331,
              alt: "Triumph of Man",
            },
          ],
        },
        {
          label: "View-Master Reel Three",
          slides: [
            {
              number: "15",
              caption: "Pavilion of American Interiors",
              src: "/images/vm05/vmin15.jpg",
              width: 350,
              height: 312,
              alt: "Pavilion of American Interiors",
            },
            {
              number: "16",
              caption: 'IBM\'s "People Wall"',
              src: "/images/vm05/vmin16.jpg",
              width: 350,
              height: 313,
              alt: "IBM People Wall",
            },
            {
              number: "17",
              caption: "Du Pont Pavilion",
              src: "/images/vm05/vmin17.jpg",
              width: 350,
              height: 305,
              alt: "DuPont Pavilion",
            },
            {
              number: "18",
              caption: 'Du Pont\'s "Chemical Magic"',
              src: "/images/vm05/vmin18.jpg",
              width: 350,
              height: 288,
              alt: "DuPont Chemistry Show",
            },
            {
              number: "19",
              caption: 'RCA\'s "TV Show"',
              src: "/images/vm05/vmin19.jpg",
              width: 350,
              height: 337,
              alt: "RCA TV Show",
            },
            {
              number: "20",
              caption: "National Cash Register and Lunar Fountain",
              src: "/images/vm05/vmin20.jpg",
              width: 350,
              height: 316,
              alt: "National Cash Register",
            },
            {
              number: "21",
              caption: "Solar Fountain at Night",
              src: "/images/vm05/vmin21.jpg",
              width: 350,
              height: 298,
              alt: "Solar Fountain",
            },
          ],
        },
      ]}
    />
  );
}
