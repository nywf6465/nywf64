import type { Metadata } from "next";
import { GmTopicStub } from "@/components/GmTopicStub";

export const metadata: Metadata = {
  title: "gm01 — General Motors Pavilion — nywf64.com",
  description:
    "gm01 at the 1964/1965 New York World's Fair — General Motors Pavilion on nywf64.com.",
};

export default function Page() {
  return <GmTopicStub title={"gm01"} />;
}
