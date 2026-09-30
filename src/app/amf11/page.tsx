import type { Metadata } from "next";
import { AmfTopicStub } from "@/components/AmfTopicStub";

export const metadata: Metadata = {
  title: 'Monorail (AMF) — The Fate of Car #4 — nywf64.com',
  description: "The Fate of Car #4 — Monorail (AMF) at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <AmfTopicStub title='The Fate of Car #4' />;
}
