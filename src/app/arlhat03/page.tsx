import type { Metadata } from "next";
import { ArlhatTopicStub } from "@/components/ArlhatTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 Arlington Hat \u2014 nywf64.com",
  description:
    "Photograph Album \u2014 Arlington Hat at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <ArlhatTopicStub title={"Photograph Album"} />;
}
