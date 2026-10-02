import type { Metadata } from "next";
import { DemocrTopicStub } from "@/components/DemocrTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Demonstration Center — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map — Demonstration Center at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <DemocrTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map"}
    />
  );
}
