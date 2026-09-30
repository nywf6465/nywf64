import type { Metadata } from "next";
import { MontanaTopicStub } from "@/components/MontanaTopicStub";

export const metadata: Metadata = {
  title:
    "Montana 1964 & 1965 Official Guidebook & Souvenir Map Entries — nywf64.com",
  description:
    "Montana 1964 & 1965 Official Guidebook & Souvenir Map Entries — Montana at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return (
    <MontanaTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map Entries" />
  );
}
