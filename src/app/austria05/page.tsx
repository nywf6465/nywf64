import type { Metadata } from "next";
import { AustriaTopicStub } from "@/components/AustriaTopicStub";

export const metadata: Metadata = {
  title: "Book: Assembling Manual \u2014 Austria \u2014 nywf64.com",
  description:
    "Book: Assembling Manual \u2014 Austria at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <AustriaTopicStub title={"Book: Assembling Manual"} />;
}
