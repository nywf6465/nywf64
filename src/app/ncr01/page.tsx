import type { Metadata } from "next";
import { NcrTopicStub } from "@/components/NcrTopicStub";

export const metadata: Metadata = {
  title: "NCR 1964 & 1965 Official Guidebook & Souvenir Map — nywf64.com",
  description:
    "NCR 1964 & 1965 Official Guidebook & Souvenir Map — NCR at the 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <NcrTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map" />
  );
}
