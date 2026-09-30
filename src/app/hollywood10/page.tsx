import type { Metadata } from "next";
import { HollywoodTopicStub } from "@/components/HollywoodTopicStub";

export const metadata: Metadata = {
  title: "West Side Story \u2014 Hollywood \u2014 nywf64.com",
  description:
    "West Side Story \u2014 Hollywood at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <HollywoodTopicStub title={'West Side Story'} />;
}
