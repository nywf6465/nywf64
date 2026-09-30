import type { Metadata } from "next";
import { AmptheTopicStub } from "@/components/AmptheTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 Amphitheatre \u2014 nywf64.com",
  description:
    "Photograph Album \u2014 Amphitheatre at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <AmptheTopicStub title={"Photograph Album"} />;
}
