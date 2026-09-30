import type { Metadata } from "next";
import { FordTopicStub } from "@/components/FordTopicStub";

export const metadata: Metadata = {
  title: "ford01 — Ford Pavilion — nywf64.com",
  description:
    "ford01 at the 1964/1965 New York World's Fair — Ford Pavilion on nywf64.com.",
};

export default function Page() {
  return <FordTopicStub title={"ford01"} />;
}
