import type { Metadata } from "next";
import { HeartlandTopicStub } from "@/components/HeartlandTopicStub";

export const metadata: Metadata = {
  title: "Proposal: Content of the Exhibit \u2014 Heartland States U.S.A. \u2014 nywf64.com",
  description: "Proposal: Content of the Exhibit \u2014 Heartland States U.S.A. at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <HeartlandTopicStub title={"Proposal: Content of the Exhibit"} />;
}
