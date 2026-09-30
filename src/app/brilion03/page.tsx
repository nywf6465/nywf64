import type { Metadata } from "next";
import { BrilionTopicStub } from "@/components/BrilionTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 British Lion Pub \u2014 nywf64.com",
  description:
    "Photograph Album \u2014 British Lion Pub at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <BrilionTopicStub title={"Photograph Album"} />;
}
