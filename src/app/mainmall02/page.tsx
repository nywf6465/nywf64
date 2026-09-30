import type { Metadata } from "next";
import { MainmallTopicStub } from "@/components/MainmallTopicStub";

export const metadata: Metadata = {
  title: "Main Mall Gallery of Photographs \u2014 nywf64.com",
  description:
    "Main Mall Gallery of Photographs \u2014 Main Mall at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <MainmallTopicStub title="Gallery of Photographs" />;
}
