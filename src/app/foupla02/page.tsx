import type { Metadata } from "next";
import { FouplaTopicStub } from "@/components/FouplaTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Fountain of the Planets — nywf64.com",
  description:
    "World's Fair Information Manual at the Fountain of the Planets — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <FouplaTopicStub title={"World's Fair Information Manual"} />;
}
