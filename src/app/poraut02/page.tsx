import type { Metadata } from "next";
import { PorautTopicStub } from "@/components/PorautTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Port Authority Heliport — nywf64.com",
  description:
    "World's Fair Information Manual — Port Authority Heliport at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PorautTopicStub title={"World's Fair Information Manual"} />;
}
