import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title: "Slide 555-57 - Guinea — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-57 — Bridge leads across a stream to Guinea's three buildings — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-57 (legacy mainliner55557.html).
 * Nav bar shows Page 58. NEXT → /mainliner55558; PREVIOUS → /mainliner55556.
 */
export default function Mainliner55557Page() {
  return (
    <MainlinerSlidePage
      slideId="555-57"
      title="Slide 555-57 - Guinea"
      lead="555-57 Bridge leads across a stream to Guinea's three buildings"
      image={{
        src: "/images/mainliner/555-57.jpg",
        width: 400,
        height: 267,
        alt: "Bridge leads across a stream to Guinea's three buildings",
      }}
      previousHref="/mainliner55556"
      nextHref="/mainliner55558"
    />
  );
}
