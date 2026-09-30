import type { Metadata } from "next";
import { AutthrTopicStub } from "@/components/AutthrTopicStub";

export const metadata: Metadata = {
  title: "Pamphlet: Preview \u2014 Auto Thrill Show \u2014 nywf64.com",
  description:
    "Pamphlet: Preview \u2014 Auto Thrill Show at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <AutthrTopicStub title={"Pamphlet: Preview"} />;
}
