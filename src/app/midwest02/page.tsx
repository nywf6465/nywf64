import type { Metadata } from "next";
import { MidwestTopicStub } from "@/components/MidwestTopicStub";

export const metadata: Metadata = {
  title: "A World's Fair Phantom — Midwestern States — nywf64.com",
  description: "A World's Fair Phantom — Midwestern States at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <MidwestTopicStub title={"A World's Fair Phantom"} />;
}
