import type { Metadata } from "next";
import { GreyhoundTopicStub } from "@/components/GreyhoundTopicStub";

export const metadata: Metadata = {
  title: "Buses & Tours \u2014 Greyhound \u2014 nywf64.com",
  description: "Buses & Tours \u2014 Greyhound at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <GreyhoundTopicStub title={"Buses & Tours"} />;
}
