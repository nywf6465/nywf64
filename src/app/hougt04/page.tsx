import type { Metadata } from "next";
import { HougtTopicStub } from "@/components/HougtTopicStub";

export const metadata: Metadata = {
  title: "Advertising \u2014 House of Good Taste \u2014 nywf64.com",
  description:
    "Advertising \u2014 House of Good Taste at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <HougtTopicStub title={'Advertising'} />;
}
