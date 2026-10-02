import type { Metadata } from "next";
import { AmfTopicStub } from "@/components/AmfTopicStub";

export const metadata: Metadata = {
  title: 'Monorail (AMF) — Brochure: Ride the Monorail — nywf64.com',
  description: "Brochure: Ride the Monorail — Monorail (AMF) at the 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <AmfTopicStub title='Brochure: Ride the Monorail' />;
}
