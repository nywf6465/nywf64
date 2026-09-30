import type { Metadata } from "next";
import { KidlanTopicStub } from "@/components/KidlanTopicStub";

export const metadata: Metadata = {
  title: "kidlan Map Entries \u2014 nywf64.com",
  description:
    "kidlan Map Entries \u2014 Kiddyland at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <KidlanTopicStub title={"Map Entries"} />;
}
