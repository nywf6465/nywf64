import type { Metadata } from "next";
import { ClairTopicStub } from "@/components/ClairTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Clairol — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map — Clairol at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <ClairTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map"}
    />
  );
}
