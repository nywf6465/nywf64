import type { Metadata } from "next";
import { FouplaTopicStub } from "@/components/FouplaTopicStub";

export const metadata: Metadata = {
  title: "The Parker Pen Brochure — Fountain of the Planets — nywf64.com",
  description:
    "The Parker Pen Brochure at the Fountain of the Planets — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <FouplaTopicStub title={"The Parker Pen Brochure"} />;
}
