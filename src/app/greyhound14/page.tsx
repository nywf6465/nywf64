import type { Metadata } from "next";
import { GreyhoundTopicStub } from "@/components/GreyhoundTopicStub";

export const metadata: Metadata = {
  title: "Almost a Legacy \u2014 Greyhound \u2014 nywf64.com",
  description: "Almost a Legacy \u2014 Greyhound at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <GreyhoundTopicStub title={"Almost a Legacy"} />;
}
