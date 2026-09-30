import type { Metadata } from "next";
import { JapanTopicStub } from "@/components/JapanTopicStub";

export const metadata: Metadata = {
  title: "Japan 1965 Pavilion Guide \u2014 nywf64.com",
  description:
    "Japan 1965 Pavilion Guide \u2014 Japan at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <JapanTopicStub title={'1965 Pavilion Guide'} />;
}
