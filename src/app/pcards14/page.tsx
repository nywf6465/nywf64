import type { Metadata } from "next";
import { PCARDS_HERO } from "@/components/PcardsHero";
import { PcardsNavChrome } from "@/components/PcardsNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Unauthorized Postcards — World’s Fair Postcard Collection — nywf64.com",
  description:
    "Unauthorized Post Cards of the 1964/1965 New York World’s Fair from the nywf64.com collection.",
};

const unauthorized = (
  <span style={{ color: "red" }}>Unauthorized Postcard</span>
);

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

/**
 * Unauthorized Postcards gallery (legacy pcards15.html → /pcards14).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 15. PREVIOUS → /pcards13; NEXT → /pcards15.
 */
export default function Pcards14Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards14-title"
      title="Unauthorized Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards13"
      overviewHref="/pcardsoverview"
      nextHref="/pcards15"
      entries={[
        {
          front: {
            src: "/images/pcards14/P58267.jpg",
            width: 275,
            height: 450,
            alt: "Port Authority Heliport unauthorized postcard No. P58267",
          },
          reverse: {
            src: "/images/pcards14/P58267reverse.jpg",
            width: 300,
            height: 106,
            alt: "Reverse — Port Authority Heliport unauthorized postcard",
          },
          meta: [
            "Port Authority Heliport",
            unauthorized,
            "No. P58267",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/P58330.jpg",
            width: 450,
            height: 278,
            alt: "Pepsi-Cola exhibitor postcard No. P58330",
          },
          reverse: {
            src: "/images/pcards14/P58330reverse.jpg",
            width: 300,
            height: 95,
            alt: "Reverse — Pepsi-Cola exhibitor postcard",
          },
          meta: [
            "Pepsi-Cola",
            exhibitor,
            "No. P58330",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
            <span key="courtesy-1" style={{ color: "red" }}>Presented courtesy Craig Bavaro Collection</span>,
          ],
        },
        {
          front: {
            src: "/images/pcards14/P58657.jpg",
            width: 450,
            height: 280,
            alt: "Indonesia Pavilion exhibitor postcard No. P58657",
          },
          reverse: {
            src: "/images/pcards14/P58657reverse.jpg",
            width: 300,
            height: 107,
            alt: "Reverse — Indonesia Pavilion exhibitor postcard",
          },
          meta: [
            "Indonesia Pavilion",
            exhibitor,
            "No. P58657",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
            <span key="courtesy-2" style={{ color: "red" }}>Presented courtesy Craig Bavaro Collection</span>,
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF401.jpg",
            width: 450,
            height: 271,
            alt: "General Motors Pavilion unauthorized postcard No. WF401",
          },
          reverse: {
            src: "/images/pcards14/WF401reverse.jpg",
            width: 300,
            height: 120,
            alt: "Reverse — General Motors Pavilion unauthorized postcard",
          },
          meta: [
            "General Motors Pavilion",
            unauthorized,
            "No. WF401",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF402.jpg",
            width: 450,
            height: 280,
            alt: "Pepsi-Cola Pavilion unauthorized postcard No. WF402",
          },
          reverse: {
            src: "/images/pcards14/WF402reverse.jpg",
            width: 300,
            height: 87,
            alt: "Reverse — Pepsi-Cola Pavilion unauthorized postcard",
          },
          meta: [
            "Pepsi-Cola Pavilion",
            unauthorized,
            "No. WF402",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF403.jpg",
            width: 276,
            height: 450,
            alt: "The N. Y. Pavilion unauthorized postcard No. WF403",
          },
          reverse: {
            src: "/images/pcards14/WF403reverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — The N. Y. Pavilion unauthorized postcard",
          },
          meta: [
            "The N. Y. Pavilion",
            unauthorized,
            "No. WF403",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF404.jpg",
            width: 450,
            height: 272,
            alt: "General Electric Pavilion unauthorized postcard No. WF404",
          },
          reverse: {
            src: "/images/pcards14/WF404reverse.jpg",
            width: 300,
            height: 98,
            alt: "Reverse — General Electric Pavilion unauthorized postcard",
          },
          meta: [
            "General Electric Pavilion",
            unauthorized,
            "No. WF404",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF405.jpg",
            width: 450,
            height: 282,
            alt: "7 Up and Dupont Pavilions unauthorized postcard No. WF405",
          },
          reverse: {
            src: "/images/pcards14/WF405reverse.jpg",
            width: 300,
            height: 58,
            alt: "Reverse — 7 Up and Dupont Pavilions unauthorized postcard",
          },
          meta: [
            "7 Up and Dupont Pavilions",
            unauthorized,
            "No. WF405",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF406.jpg",
            width: 450,
            height: 282,
            alt: "Avenue of Commerce - near Pepsi unauthorized postcard No. WF406",
          },
          reverse: {
            src: "/images/pcards14/WF406reverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — Avenue of Commerce - near Pepsi unauthorized postcard",
          },
          meta: [
            "Avenue of Commerce - near Pepsi",
            unauthorized,
            "No. WF406",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
            <span key="courtesy-3" style={{ color: "red" }}>Presented courtesy Craig Bavaro Collection</span>,
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF407.jpg",
            width: 450,
            height: 279,
            alt: "Industrial Area unauthorized postcard No. WF407",
          },
          reverse: {
            src: "/images/pcards14/WF407reverse.jpg",
            width: 300,
            height: 82,
            alt: "Reverse — Industrial Area unauthorized postcard",
          },
          meta: [
            "Industrial Area",
            unauthorized,
            "No. WF407",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF408.jpg",
            width: 450,
            height: 278,
            alt: "Transportation Area unauthorized postcard No. WF408",
          },
          reverse: {
            src: "/images/pcards14/WF408reverse.jpg",
            width: 300,
            height: 76,
            alt: "Reverse — Transportation Area unauthorized postcard",
          },
          meta: [
            "Transportation Area",
            unauthorized,
            "No. WF408",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF409.jpg",
            width: 450,
            height: 279,
            alt: "Kennedy Circle Looking Southwest unauthorized postcard No. WF409",
          },
          reverse: {
            src: "/images/pcards14/WF409reverse.jpg",
            width: 300,
            height: 84,
            alt: "Reverse — Kennedy Circle Looking Southwest unauthorized postcard",
          },
          meta: [
            "Kennedy Circle Looking Southwest",
            unauthorized,
            "No. WF409",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF410.jpg",
            width: 450,
            height: 281,
            alt: "Looking North from Kennedy Circle unauthorized postcard No. WF410",
          },
          reverse: {
            src: "/images/pcards14/WF410reverse.jpg",
            width: 300,
            height: 67,
            alt: "Reverse — Looking North from Kennedy Circle unauthorized postcard",
          },
          meta: [
            "Looking North from Kennedy Circle",
            unauthorized,
            "No. WF410",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF411.jpg",
            width: 450,
            height: 283,
            alt: "Subway and Railroad Entrance unauthorized postcard No. WF411",
          },
          reverse: {
            src: "/images/pcards14/WF411reverse.jpg",
            width: 300,
            height: 70,
            alt: "Reverse — Subway and Railroad Entrance unauthorized postcard",
          },
          meta: [
            "Subway and Railroad Entrance",
            unauthorized,
            "No. WF411",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF412.jpg",
            width: 450,
            height: 282,
            alt: "Fountains of the Fair unauthorized postcard No. WF412",
          },
          reverse: {
            src: "/images/pcards14/WF412reverse.jpg",
            width: 300,
            height: 74,
            alt: "Reverse — Fountains of the Fair unauthorized postcard",
          },
          meta: [
            "Fountains of the Fair",
            unauthorized,
            "No. WF412",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF413.jpg",
            width: 450,
            height: 281,
            alt: "Fountain of the Planets unauthorized postcard No. WF413",
          },
          reverse: {
            src: "/images/pcards14/WF413reverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — Fountain of the Planets unauthorized postcard",
          },
          meta: [
            "Fountain of the Planets",
            unauthorized,
            "No. WF413",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF414.jpg",
            width: 450,
            height: 276,
            alt: "General Foods Arch No. 1 unauthorized postcard No. WF414",
          },
          reverse: {
            src: "/images/pcards14/WF414reverse.jpg",
            width: 300,
            height: 104,
            alt: "Reverse — General Foods Arch No. 1 unauthorized postcard",
          },
          meta: [
            "General Foods Arch No. 1",
            unauthorized,
            "No. WF414",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF415.jpg",
            width: 450,
            height: 278,
            alt: "The Federal Pavilion of the United States unauthorized postcard No. WF415",
          },
          reverse: {
            src: "/images/pcards14/WF415reverse.jpg",
            width: 300,
            height: 121,
            alt: "Reverse — The Federal Pavilion of the United States unauthorized postcard",
          },
          meta: [
            "The Federal Pavilion of the United States",
            unauthorized,
            "No. WF415",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF416.jpg",
            width: 450,
            height: 279,
            alt: "Sinclair Dinoland unauthorized postcard No. WF416",
          },
          reverse: {
            src: "/images/pcards14/WF416reverse.jpg",
            width: 300,
            height: 60,
            alt: "Reverse — Sinclair Dinoland unauthorized postcard",
          },
          meta: [
            "Sinclair Dinoland",
            unauthorized,
            "No. WF416",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF417.jpg",
            width: 450,
            height: 277,
            alt: "Johnson's Wax unauthorized postcard No. WF417",
          },
          reverse: {
            src: "/images/pcards14/WF417reverse.jpg",
            width: 300,
            height: 65,
            alt: "Reverse — Johnson's Wax unauthorized postcard",
          },
          meta: [
            "Johnson's Wax",
            unauthorized,
            "No. WF417",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)3",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF418.jpg",
            width: 450,
            height: 279,
            alt: "International Business Machines unauthorized postcard No. WF418",
          },
          reverse: {
            src: "/images/pcards14/WF418reverse.jpg",
            width: 300,
            height: 72,
            alt: "Reverse — International Business Machines unauthorized postcard",
          },
          meta: [
            "International Business Machines",
            unauthorized,
            "No. WF418",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF419.jpg",
            width: 450,
            height: 278,
            alt: "General Scene of the Industrial Area unauthorized postcard No. WF419",
          },
          reverse: {
            src: "/images/pcards14/WF419reverse.jpg",
            width: 300,
            height: 63,
            alt: "Reverse — General Scene of the Industrial Area unauthorized postcard",
          },
          meta: [
            "General Scene of the Industrial Area",
            unauthorized,
            "No. WF419",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF420.jpg",
            width: 450,
            height: 276,
            alt: "Riding in the Swiss Skyride unauthorized postcard No. WF420",
          },
          reverse: {
            src: "/images/pcards14/WF420reverse.jpg",
            width: 300,
            height: 73,
            alt: "Reverse — Riding in the Swiss Skyride unauthorized postcard",
          },
          meta: [
            "Riding in the Swiss Skyride",
            unauthorized,
            "No. WF420",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF421.jpg",
            width: 450,
            height: 274,
            alt: "The AMF Monorail unauthorized postcard No. WF421",
          },
          reverse: {
            src: "/images/pcards14/WF421reverse.jpg",
            width: 300,
            height: 90,
            alt: "Reverse — The AMF Monorail unauthorized postcard",
          },
          meta: [
            "The AMF Monorail",
            unauthorized,
            "No. WF421",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF422.jpg",
            width: 450,
            height: 277,
            alt: "General Motors Pavilion unauthorized postcard No. WF422",
          },
          reverse: {
            src: "/images/pcards14/WF422reverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — General Motors Pavilion unauthorized postcard",
          },
          meta: [
            "General Motors Pavilion",
            unauthorized,
            "No. WF422",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF423.jpg",
            width: 450,
            height: 282,
            alt: "Hello from N.Y.C with 4 Views unauthorized postcard No. WF423",
          },
          reverse: {
            src: "/images/pcards14/WF423reverse.jpg",
            width: 300,
            height: 79,
            alt: "Reverse — Hello from N.Y.C with 4 Views unauthorized postcard",
          },
          meta: [
            "Hello from N.Y.C with 4 Views",
            unauthorized,
            "No. WF423",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF424.jpg",
            width: 450,
            height: 283,
            alt: "Greetings from N.Y. with 2 Views unauthorized postcard No. WF424",
          },
          reverse: {
            src: "/images/pcards14/WF424reverse.jpg",
            width: 300,
            height: 77,
            alt: "Reverse — Greetings from N.Y. with 2 Views unauthorized postcard",
          },
          meta: [
            "Greetings from N.Y. with 2 Views",
            unauthorized,
            "No. WF424",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF425.jpg",
            width: 450,
            height: 279,
            alt: "Greetings from N.Y. with 3 Views unauthorized postcard No. WF425",
          },
          reverse: {
            src: "/images/pcards14/WF425reverse.jpg",
            width: 300,
            height: 102,
            alt: "Reverse — Greetings from N.Y. with 3 Views unauthorized postcard",
          },
          meta: [
            "Greetings from N.Y. with 3 Views",
            unauthorized,
            "No. WF425",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF426.jpg",
            width: 450,
            height: 277,
            alt: "4 Views of the Fair unauthorized postcard No. WF426",
          },
          reverse: {
            src: "/images/pcards14/WF426reverse.jpg",
            width: 300,
            height: 100,
            alt: "Reverse — 4 Views of the Fair unauthorized postcard",
          },
          meta: [
            "4 Views of the Fair",
            unauthorized,
            "No. WF426",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF427.jpg",
            width: 450,
            height: 279,
            alt: "Hello from N.Y. with 4 Views unauthorized postcard No. WF427",
          },
          reverse: {
            src: "/images/pcards14/WF427reverse.jpg",
            width: 300,
            height: 106,
            alt: "Reverse — Hello from N.Y. with 4 Views unauthorized postcard",
          },
          meta: [
            "Hello from N.Y. with 4 Views",
            unauthorized,
            "No. WF427",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF428.jpg",
            width: 450,
            height: 284,
            alt: "Hello from N.Y. with 3 Views unauthorized postcard No. WF428",
          },
          reverse: {
            src: "/images/pcards14/WF428reverse.jpg",
            width: 300,
            height: 108,
            alt: "Reverse — Hello from N.Y. with 3 Views unauthorized postcard",
          },
          meta: [
            "Hello from N.Y. with 3 Views",
            unauthorized,
            "No. WF428",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF429.jpg",
            width: 450,
            height: 278,
            alt: "The New York Pavilion unauthorized postcard No. WF429",
          },
          reverse: {
            src: "/images/pcards14/WF429reverse.jpg",
            width: 300,
            height: 89,
            alt: "Reverse — The New York Pavilion unauthorized postcard",
          },
          meta: [
            "The New York Pavilion",
            unauthorized,
            "No. WF429",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
            <span key="courtesy-4" style={{ color: "red" }}>Presented courtesy Craig Bavaro Collection</span>,
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF430.jpg",
            width: 450,
            height: 280,
            alt: "The Vatican Pavilion unauthorized postcard No. WF430",
          },
          reverse: {
            src: "/images/pcards14/WF430reverse.jpg",
            width: 300,
            height: 126,
            alt: "Reverse — The Vatican Pavilion unauthorized postcard",
          },
          meta: [
            "The Vatican Pavilion",
            unauthorized,
            "No. WF430",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF431.jpg",
            width: 450,
            height: 265,
            alt: "General Motors Pavilion unauthorized postcard No. WF431",
          },
          reverse: {
            src: "/images/pcards14/WF431reverse.jpg",
            width: 300,
            height: 113,
            alt: "Reverse — General Motors Pavilion unauthorized postcard",
          },
          meta: [
            "General Motors Pavilion",
            unauthorized,
            "No. WF431",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF432.jpg",
            width: 450,
            height: 278,
            alt: "The R.C.A. Pavilion unauthorized postcard No. WF432",
          },
          reverse: {
            src: "/images/pcards14/WF432reverse.jpg",
            width: 300,
            height: 108,
            alt: "Reverse — The R.C.A. Pavilion unauthorized postcard",
          },
          meta: [
            "The R.C.A. Pavilion",
            unauthorized,
            "No. WF432",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF433.jpg",
            width: 450,
            height: 278,
            alt: "Air View of the Fair unauthorized postcard No. WF433",
          },
          reverse: {
            src: "/images/pcards14/WF433reverse.jpg",
            width: 300,
            height: 82,
            alt: "Reverse — Air View of the Fair unauthorized postcard",
          },
          meta: [
            "Air View of the Fair",
            unauthorized,
            "No. WF433",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF434.jpg",
            width: 450,
            height: 280,
            alt: "The Kodak Pavilion unauthorized postcard No. WF434",
          },
          reverse: {
            src: "/images/pcards14/WF434reverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — The Kodak Pavilion unauthorized postcard",
          },
          meta: [
            "The Kodak Pavilion",
            unauthorized,
            "No. WF434",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF435.jpg",
            width: 450,
            height: 282,
            alt: "Ford Motor Company Pavilion unauthorized postcard No. WF435",
          },
          reverse: {
            src: "/images/pcards14/WF435reverse.jpg",
            width: 300,
            height: 79,
            alt: "Reverse — Ford Motor Company Pavilion unauthorized postcard",
          },
          meta: [
            "Ford Motor Company Pavilion",
            unauthorized,
            "No. WF435",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/pcards14/WF436.jpg",
            width: 450,
            height: 279,
            alt: "Transportation & Travel Pavilion unauthorized postcard No. WF436",
          },
          reverse: {
            src: "/images/pcards14/WF436reverse.jpg",
            width: 300,
            height: 89,
            alt: "Reverse — Transportation & Travel Pavilion unauthorized postcard",
          },
          meta: [
            "Transportation & Travel Pavilion",
            unauthorized,
            "No. WF436",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        }
      ]}
    />
  );
}
