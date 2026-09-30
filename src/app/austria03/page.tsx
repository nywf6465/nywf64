import type { Metadata } from "next";
import { AustriaTopicStub } from "@/components/AustriaTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 Austria \u2014 nywf64.com",
  description:
    "Photograph Album \u2014 Austria at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <AustriaTopicStub title={"Photograph Album"} />;
}
