import type { Metadata } from "next";
import { PoolinTopicStub } from "@/components/PoolinTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map — Pool of Industry — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map at the Pool of Industry — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PoolinTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />;
}
