import type { Metadata } from "next";
import { LogfluTopicStub } from "@/components/LogfluTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Flume Ride — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map — Flume Ride at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <LogfluTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map" />
  );
}
