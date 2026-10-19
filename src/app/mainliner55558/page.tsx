import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 555-58 - Hall of Free Enterprise — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 555-58 — Hall of Free Enterprise Pavilion, one-story steel and concrete structure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 555-58 (legacy mainliner55558.html).
 * Nav bar shows Page 59. NEXT → /mainliner55559; PREVIOUS → /mainliner55557.
 */
export default function Mainliner55558Page() {
  return (
    <MainlinerSlidePage
      slideId="555-58"
      title="Slide 555-58 - Hall of Free Enterprise"
      lead="555-58 Hall of Free Enterprise Pavilion, one-story steel and concrete structure"
      image={{
        src: "/images/mainliner/555-58.jpg",
        width: 400,
        height: 267,
        alt: "Hall of Free Enterprise Pavilion, one-story steel and concrete structure",
      }}
      previousHref="/mainliner55557"
      nextHref="/mainliner55559"
    />
  );
}
