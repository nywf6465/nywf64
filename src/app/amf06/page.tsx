import type { Metadata } from "next";
import { AmfTopicStub } from "@/components/AmfTopicStub";

export const metadata: Metadata = {
  title: "Monorail (AMF) — Booklet: MONORAIL Tomorrow's Transportation Today — nywf64.com",
  description: "Booklet: MONORAIL Tomorrow's Transportation Today — Monorail (AMF) at the 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <AmfTopicStub title="Booklet: MONORAIL Tomorrow's Transportation Today" />;
}
