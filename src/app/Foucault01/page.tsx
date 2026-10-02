import type { Metadata } from "next";
import { FoucaultTopicStub } from "@/components/FoucaultTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Fountains of the Fairs — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map at the Fountains of the Fairs — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <FoucaultTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map"}
    />
  );
}
