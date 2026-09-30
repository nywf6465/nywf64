import type { Metadata } from "next";
import { HalfreTopicStub } from "@/components/HalfreTopicStub";

export const metadata: Metadata = {
  title: "Postcards \u2014 Hall of Free Enterprise \u2014 nywf64.com",
  description: "Postcards \u2014 Hall of Free Enterprise at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <HalfreTopicStub title={"Postcards"} />;
}
