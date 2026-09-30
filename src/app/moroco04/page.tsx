import type { Metadata } from "next";
import { MorocoTopicStub } from "@/components/MorocoTopicStub";

export const metadata: Metadata = {
  title: "Morocco Gallery of Photographs — nywf64.com",
  description:
    "Morocco Gallery of Photographs — Morocco at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <MorocoTopicStub title="Gallery of Photographs" />;
}
