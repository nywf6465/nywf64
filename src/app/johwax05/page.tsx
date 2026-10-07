import type { Metadata } from "next";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";
import { JOHWAX_HERO } from "@/data/johwaxHero";
import { JOHWAX_05_SECTIONS } from "@/data/johwax05Sections";

export const metadata: Metadata = {
  title: "Photograph Album — Johnson Wax — nywf64.com",
  description:
    "Johnson Wax Pavilion photograph album — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Johwax05Page() {
  return (
    <PhotographsPage
      heroLabel="Johnson Wax Pavilion"
      titleId="johwax05-title"
      hero={JOHWAX_HERO}
      nav={<JohwaxNavChrome />}
      previousHref="/johwax04"
      overviewHref="/johwaxoverview"
      nextHref="/johwax06"
      sections={JOHWAX_05_SECTIONS}
    />
  );
}
