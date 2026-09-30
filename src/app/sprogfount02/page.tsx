import type { Metadata } from "next";
import { SprogfountTopicStub } from "@/components/SprogfountTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Fountain of Progress South — nywf64.com",
  description:
    "World's Fair Information Manual at the Fountain of Progress South — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <SprogfountTopicStub title={"World's Fair Information Manual"} />;
}
