import type { Metadata } from "next";
import { FirnatTopicStub } from "@/components/FirnatTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — First National City Bank — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map — First National City Bank at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <FirnatTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map" />
  );
}
