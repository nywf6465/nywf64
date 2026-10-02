import type { Metadata } from "next";
import { DenmarkTopicStub } from "@/components/DenmarkTopicStub";

export const metadata: Metadata = {
  title: "Pamphlet: Flag Raising — Denmark — nywf64.com",
  description:
    "Pamphlet: Flag Raising — Denmark at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <DenmarkTopicStub title={"Pamphlet: Flag Raising"} />;
}
