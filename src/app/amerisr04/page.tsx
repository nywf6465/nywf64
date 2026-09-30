import type { Metadata } from "next";
import { AmerisrTopicStub } from "@/components/AmerisrTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 American-Israel Pavilion \u2014 nywf64.com",
  description:
    "Photograph Album \u2014 American-Israel Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <AmerisrTopicStub title={"Photograph Album"} />;
}
