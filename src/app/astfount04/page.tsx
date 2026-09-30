import type { Metadata } from "next";
import { AstfountTopicStub } from "@/components/AstfountTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Astral Fountain — nywf64.com",
  description:
    "Photograph Album at the Astral Fountain — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <AstfountTopicStub title={"Photograph Album"} />;
}
