import type { Metadata } from "next";
import { LunfountTopicStub } from "@/components/LunfountTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Lunar Fountain — nywf64.com",
  description:
    "World's Fair Information Manual at the Lunar Fountain — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <LunfountTopicStub title={"World's Fair Information Manual"} />;
}
