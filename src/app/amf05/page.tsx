import type { Metadata } from "next";
import { AmfTopicStub } from "@/components/AmfTopicStub";

export const metadata: Metadata = {
  title: 'Monorail (AMF) — Press Releases — nywf64.com',
  description: "Press Releases — Monorail (AMF) at the 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <AmfTopicStub title='Press Releases' />;
}
