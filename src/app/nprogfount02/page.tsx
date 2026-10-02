import type { Metadata } from "next";
import { NprogfountTopicStub } from "@/components/NprogfountTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Fountain of Progress North — nywf64.com",
  description:
    "World's Fair Information Manual at the Fountain of Progress North — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <NprogfountTopicStub title={"World's Fair Information Manual"} />;
}
