import type { Metadata } from "next";
import { ConcirTopicStub } from "@/components/ConcirTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Continental Circus — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map — Continental Circus at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <ConcirTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map"}
    />
  );
}
