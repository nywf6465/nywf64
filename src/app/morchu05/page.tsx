import type { Metadata } from "next";
import { MorchuTopicStub } from "@/components/MorchuTopicStub";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking \u2014 Mormon Church \u2014 nywf64.com",
  description:
    "Pamphlet: Groundbreaking \u2014 Mormon Church at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <MorchuTopicStub title={"Pamphlet: Groundbreaking"} />;
}
