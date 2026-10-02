import type { Metadata } from "next";
import { MissouriTopicStub } from "@/components/MissouriTopicStub";

export const metadata: Metadata = {
  title: 'Missouri Rendezvous in Space — nywf64.com',
  description: "Missouri Rendezvous in Space — Missouri at the 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <MissouriTopicStub title='Rendezvous in Space' />;
}
