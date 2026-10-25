import type { Metadata } from "next";
import { ViewMastersGalleryPage } from "@/components/ViewMastersGalleryPage";
import { ViewMastersNavChrome } from "@/components/ViewMastersNavChrome";

export const metadata: Metadata = {
  title: "International Area — The View-Masters Reels — nywf64.com",
  description:
    "View-Master International Area packet (A 673) — 21 stereo pictures of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * International Area gallery (legacy vm04.html → /vm03).
 * Shared ViewMastersHero (1905×826). Nav Page 4 (overview is Page 1).
 * PREVIOUS → /vm02; NEXT hidden until /vm04 ships.
 * HARD RULE — navy title banner beneath the attraction nav.
 */
export default function Vm03Page() {
  return (
    <ViewMastersGalleryPage
      title="International Area"
      titleId="vm03-title"
      packetName="INTERNATIONAL AREA"
      packetNo="A 673"
      coverAccentColor="#ff8000"
      cover={{
        src: "/images/vm03/vmna.jpg",
        width: 200,
        height: 202,
        alt: "International Area Packet",
      }}
      nav={<ViewMastersNavChrome />}
      previousHref="/vm02"
      overviewHref="/vmoverview"
      hideNext
      reels={[
        {
          label: "View-Master Reel One",
          slides: [
            {
              number: "01",
              caption: "Mexico Pavilion",
              src: "/images/vm03/vmna06.jpg",
              width: 350,
              height: 305,
              alt: "Mexico Pavilion",
            },
            {
              number: "02",
              caption: "Golden Thailand Pavilion",
              src: "/images/vm03/vmna13.jpg",
              width: 350,
              height: 300,
              alt: "Thailand Pavilion",
            },
            {
              number: "03",
              caption: "Korean Pav. from Sky Ride",
              src: "/images/vm03/vmna01.jpg",
              width: 350,
              height: 307,
              alt: "Korea Pavilion",
            },
            {
              number: "04",
              caption: "India Pav. from U.S. Pavilion",
              src: "/images/vm03/vmna12.jpg",
              width: 350,
              height: 304,
              alt: "India Pavilion",
            },
            {
              number: "05",
              caption: "Tivoli Garden - Denmark Pav.",
              src: "/images/vm03/vmna17.jpg",
              width: 350,
              height: 310,
              alt: "Tivoli Garden Playground at Denmark Pavilion",
            },
            {
              number: "06",
              caption: "Hong Kong Pavilion and Junks",
              src: "/images/vm03/vmna21.jpg",
              width: 350,
              height: 307,
              alt: "Hong Kong Pavilion",
            },
            {
              number: "07",
              caption: "Hong Kong Pavilion at Night",
              src: "/images/vm03/vmna07.jpg",
              width: 350,
              height: 327,
              alt: "Hong Kong Pavilion at Night",
            },
          ],
        },
        {
          label: "View-Master Reel Two",
          slides: [
            {
              number: "08",
              caption: "Cover - Indonesian Pavilion",
              coverAccent: true,
              src: "/images/vm03/vmna04.jpg",
              width: 350,
              height: 295,
              alt: "Indonesia Pavilion",
            },
            {
              number: "09",
              caption: "Indonesian Carvings",
              src: "/images/vm03/vmna15.jpg",
              width: 350,
              height: 311,
              alt: "Indonesian Carving",
            },
            {
              number: "10",
              caption: "Spain Pavilion",
              src: "/images/vm03/vmna16.jpg",
              width: 350,
              height: 307,
              alt: "Pavilion of Spain",
            },
            {
              number: "11",
              caption: "Japan and Austria Pavilions",
              src: "/images/vm03/vmna10.jpg",
              width: 350,
              height: 306,
              alt: "Japan, Austria Pavilions",
            },
            {
              number: "12",
              caption: "Geisha Dance and Music",
              src: "/images/vm03/vmna09.jpg",
              width: 350,
              height: 303,
              alt: "Dancer at Japan Pavilion",
            },
            {
              number: "13",
              caption: "Guinea Pavilion",
              src: "/images/vm03/vmna18.jpg",
              width: 350,
              height: 310,
              alt: "Pavilion of Guinea",
            },
            {
              number: "14",
              caption: "Sudan Pavilion and the Swiss Sky Ride",
              src: "/images/vm03/vmna08.jpg",
              width: 350,
              height: 298,
              alt: "Sudan Pavilion",
            },
          ],
        },
        {
          label: "View-Master Reel Three",
          slides: [
            {
              number: "15",
              caption: "The Vatican Pavilion",
              src: "/images/vm03/vmna20.jpg",
              width: 350,
              height: 303,
              alt: "Vatican Pavilion",
            },
            {
              number: "16",
              caption: "Vatican & Belgium Pavilions",
              src: "/images/vm03/vmna14.jpg",
              width: 350,
              height: 300,
              alt: "Vatican, Belgian Pavilions",
            },
            {
              number: "17",
              caption: "Sweden, France",
              src: "/images/vm03/vmna05.jpg",
              width: 350,
              height: 290,
              alt: "Sweden, France, Swiss Pavilions",
            },
            {
              number: "18",
              caption: "Panorama of International Area from NYS Tower",
              src: "/images/vm03/vmna03.jpg",
              width: 350,
              height: 305,
              alt: "International Area Panorama",
            },
            {
              number: "19",
              caption: "African Pavilion",
              src: "/images/vm03/vmna02.jpg",
              width: 350,
              height: 305,
              alt: "Africa Pavilion",
            },
            {
              number: "20",
              caption: "Republic of China Palace",
              src: "/images/vm03/vmna19.jpg",
              width: 350,
              height: 319,
              alt: "Republic of China Pavilion",
            },
            {
              number: "21",
              caption: "China Pavilion at Night",
              src: "/images/vm03/vmna11.jpg",
              width: 350,
              height: 290,
              alt: "China Pavilion at Night",
            },
          ],
        },
      ]}
    />
  );
}
