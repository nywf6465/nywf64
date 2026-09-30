import type { Metadata } from "next";
import { ChucanTopicStub } from "@/components/ChucanTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 Chunky Candy \u2014 nywf64.com",
  description:
    "Photograph Album \u2014 Chunky Candy at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <ChucanTopicStub title={"Photograph Album"} />;
}
