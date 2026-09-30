import type { Metadata } from "next";
import { VaticanTopicStub } from "@/components/VaticanTopicStub";

export const metadata: Metadata = {
  title: "vatican01 — Vatican Pavilion — nywf64.com",
  description:
    "vatican01 at the 1964/1965 New York World's Fair — Vatican Pavilion on nywf64.com.",
};

export default function Page() {
  return <VaticanTopicStub title={"vatican01"} />;
}
