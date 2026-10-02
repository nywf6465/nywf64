import type { Metadata } from "next";
import { FlowatskiTopicStub } from "@/components/FlowatskiTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Florida Citrus Water Ski Show — nywf64.com",
  description:
    "Photograph Album — Florida Citrus Water Ski Show at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <FlowatskiTopicStub title="Photograph Album" />;
}
