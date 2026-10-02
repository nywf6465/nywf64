import type { Metadata } from "next";
import { FouplaTopicStub } from "@/components/FouplaTopicStub";

export const metadata: Metadata = {
  title: "Construction — Fountain of the Planets — nywf64.com",
  description:
    "Construction at the Fountain of the Planets — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <FouplaTopicStub title={"Construction"} />;
}
