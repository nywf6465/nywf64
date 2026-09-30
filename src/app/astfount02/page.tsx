import type { Metadata } from "next";
import { AstfountTopicStub } from "@/components/AstfountTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Astral Fountain — nywf64.com",
  description:
    "World's Fair Information Manual at the Astral Fountain — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <AstfountTopicStub title={"World's Fair Information Manual"} />;
}
