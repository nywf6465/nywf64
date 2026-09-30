import type { Metadata } from "next";
import { SersciTopicStub } from "@/components/SersciTopicStub";

export const metadata: Metadata = {
  title: "Gallery of Photographs \u2014 Sermons from Science \u2014 nywf64.com",
  description:
    "Gallery of Photographs \u2014 Sermons from Science at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <SersciTopicStub title={"Gallery of Photographs"} />;
}
