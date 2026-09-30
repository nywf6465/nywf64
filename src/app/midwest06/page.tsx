import type { Metadata } from "next";
import { MidwestTopicStub } from "@/components/MidwestTopicStub";

export const metadata: Metadata = {
  title: 'Proposal: Content of the Exhibit — Midwestern States — nywf64.com',
  description: 'Proposal: Content of the Exhibit — Midwestern States at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <MidwestTopicStub title={'Proposal: Content of the Exhibit'} />;
}
