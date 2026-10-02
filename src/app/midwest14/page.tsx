import type { Metadata } from "next";
import { MidwestTopicStub } from "@/components/MidwestTopicStub";

export const metadata: Metadata = {
  title: 'Proposal: Recommended Procedures — Midwestern States — nywf64.com',
  description: 'Proposal: Recommended Procedures — Midwestern States at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <MidwestTopicStub title={'Proposal: Recommended Procedures'} />;
}
