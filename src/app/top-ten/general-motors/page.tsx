import type { Metadata } from "next";
import Link from "next/link";
import { AttractionNavChrome } from "@/components/AttractionNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";

export const metadata: Metadata = {
  title: "General Motors & The Futurama — The Top Ten Attractions — nywf64.com",
  description:
    "General Motors & The Futurama at the 1964/1965 New York World’s Fair — The Top Ten Attractions on nywf64.com.",
};

/** Demo topics — placeholders until real attraction sections are wired. */
const DEMO_TOPICS = [
  { label: "Overview", href: "/top-ten/general-motors" },
  { label: "The Futurama Ride", href: "/top-ten/general-motors" },
  { label: "Architecture", href: "/top-ten/general-motors" },
  { label: "Exhibits", href: "/top-ten/general-motors" },
  { label: "Photos", href: "/top-ten/general-motors" },
  { label: "Guidebook Notes", href: "/top-ten/general-motors" },
  { label: "Maps", href: "/maps" },
  { label: "Related Attractions", href: "/top-ten" },
];

export default function Page() {
  return (
    <>
      {/* Full-bleed nav bar (header width) — opens nav menu */}
      <AttractionNavChrome topics={DEMO_TOPICS} />
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2.5rem 1.25rem 3rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <p style={{ margin: "0 0 1rem", fontSize: "0.9rem" }}>
          <Link href="/top-ten" style={{ color: "#990000" }}>
            ← The Top Ten Attractions
          </Link>
        </p>
        <h1 style={{ margin: 0, color: "#26346e", fontSize: "1.75rem" }}>
          General Motors & The Futurama
        </h1>
        <p style={{ margin: "1rem 0 0", color: "#26346e", lineHeight: 1.5 }}>
          Placeholder page — full pavilion content will connect here.
        </p>
      </main>
      {/* Nav2 bar — footer width; above site footer */}
      <Nav2Bar previousHref="#" overviewHref="#" nextHref="#" />
    </>
  );
}
