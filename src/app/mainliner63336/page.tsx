import type { Metadata } from "next";
import { MainlinerSlidePage } from "@/components/MainlinerSlidePage";

export const metadata: Metadata = {
  title:
    "Slide 633-36 - Hall of Science — The Blackhawk Films Slide Set — nywf64.com",
  description:
    "MAINLINER slide 633-36 — Seven-foot wall of Liscannor gray stone and Connemara red marble encloses Ireland's exhibit — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * MAINLINER slide 633-36 (legacy mainliner63336.html).
 * Nav bar shows Page 37. NEXT → /mainliner63337; PREVIOUS → /mainliner63335.
 */
export default function Mainliner63336Page() {
  return (
    <MainlinerSlidePage
      slideId="633-36"
      title="Slide 633-36 - Hall of Science"
      lead={
        "633-36 Seven-foot wall of Liscannor gray stone and Connemara red marble encloses Ireland's exhibit"
      }
      image={{
        src: "/images/mainliner/633-36.jpg",
        width: 267,
        height: 400,
        alt: "Seven-foot wall of Liscannor gray stone and Connemara red marble encloses Ireland's exhibit",
      }}
      previousHref="/mainliner63335"
      nextHref="/mainliner63337"
    />
  );
}
