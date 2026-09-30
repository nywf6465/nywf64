import type { Metadata } from "next";
import { LespouTopicStub } from "@/components/LespouTopicStub";

export const metadata: Metadata = {
  title: "Les Poupees de Paris Gallery of Photographs \u2014 nywf64.com",
  description:
    "Les Poupees de Paris Gallery of Photographs \u2014 Les Poupees de Paris at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <LespouTopicStub title="Gallery of Photographs" />;
}
