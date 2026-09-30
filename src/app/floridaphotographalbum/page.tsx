import type { Metadata } from "next";
import { FloridaTopicStub } from "@/components/FloridaTopicStub";

export const metadata: Metadata = {
  title: "floridaphotographalbum — Florida Pavilion — nywf64.com",
  description:
    "floridaphotographalbum at the 1964/1965 New York World's Fair — Florida Pavilion on nywf64.com.",
};

export default function Page() {
  return <FloridaTopicStub title={"floridaphotographalbum"} />;
}
