import type { Metadata } from "next";
import { FlowatskiTopicStub } from "@/components/FlowatskiTopicStub";

export const metadata: Metadata = {
  title:
    "Pamphlet: Florida Citrus Water Ski Show — Florida Citrus Water Ski Show — nywf64.com",
  description:
    "Pamphlet: Florida Citrus Water Ski Show at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <FlowatskiTopicStub title="Pamphlet: Florida Citrus Water Ski Show" />
  );
}
