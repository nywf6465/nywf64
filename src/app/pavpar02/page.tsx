import type { Metadata } from "next";
import { PavparTopicStub } from "@/components/PavparTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Pavilion of Paris — nywf64.com",
  description:
    "World's Fair Information Manual — Pavilion of Paris at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <PavparTopicStub title={"World's Fair Information Manual"} />;
}
