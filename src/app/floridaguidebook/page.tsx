import type { Metadata } from "next";
import { FloridaTopicStub } from "@/components/FloridaTopicStub";

export const metadata: Metadata = {
  title: "floridaguidebook — Florida Pavilion — nywf64.com",
  description:
    "floridaguidebook at the 1964/1965 New York World's Fair — Florida Pavilion on nywf64.com.",
};

export default function Page() {
  return <FloridaTopicStub title={"floridaguidebook"} />;
}
