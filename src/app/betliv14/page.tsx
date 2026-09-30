import type { Metadata } from "next";
import { BetlivTopicStub } from "@/components/BetlivTopicStub";

export const metadata: Metadata = {
  title: "Borden's Sideshows \u2014 Better Living Center \u2014 nywf64.com",
  description:
    "Borden's Sideshows \u2014 Better Living Center at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <BetlivTopicStub title={"Borden's Sideshows"} />;
}
