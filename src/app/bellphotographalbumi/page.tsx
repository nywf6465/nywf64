import type { Metadata } from "next";
import { BellTopicStub } from "@/components/BellTopicStub";

export const metadata: Metadata = {
  title: "bellphotographalbumi — Bell System Pavilion — nywf64.com",
  description:
    "bellphotographalbumi at the 1964/1965 New York World's Fair — Bell System Pavilion on nywf64.com.",
};

export default function Page() {
  return <BellTopicStub title={"bellphotographalbumi"} />;
}
