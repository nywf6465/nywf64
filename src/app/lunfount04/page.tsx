import type { Metadata } from "next";
import { LunfountTopicStub } from "@/components/LunfountTopicStub";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Lunar Fountain — nywf64.com",
  description:
    "Gallery of Photographs at the Lunar Fountain — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <LunfountTopicStub title={"Gallery of Photographs"} />;
}
