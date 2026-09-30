import type { Metadata } from "next";
import { DupontTopicStub } from "@/components/DupontTopicStub";

export const metadata: Metadata = {
  title: "Audio Selections from The Wonderful World of Chemistry \u2014 DuPont Pavilion \u2014 nywf64.com",
  description:
    "Audio Selections from The Wonderful World of Chemistry at the 1964/1965 New York World's Fair \u2014 DuPont Pavilion on nywf64.com.",
};

export default function Page() {
  return <DupontTopicStub title={"Audio Selections from The Wonderful World of Chemistry"} />;
}
