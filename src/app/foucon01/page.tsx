import type { Metadata } from "next";
import { FouconTopicStub } from "@/components/FouconTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Fountain of the Continents — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map at the Fountain of the Continents — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <FouconTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map"}
    />
  );
}
