import type { Metadata } from "next";
import { FiestaTopicStub } from "@/components/FiestaTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map — Fiesta — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map — Fiesta at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <FiestaTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map" />
  );
}
