import type { Metadata } from "next";
import { CaribbTopicStub } from "@/components/CaribbTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 Caribbean \u2014 nywf64.com",
  description:
    "Photograph Album \u2014 Caribbean at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <CaribbTopicStub title={"Photograph Album"} />;
}
