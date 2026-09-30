import type { Metadata } from "next";
import { MissouriTopicStub } from "@/components/MissouriTopicStub";

export const metadata: Metadata = {
  title: "Missouri World's Fair Information Manual — nywf64.com",
  description: "Missouri World's Fair Information Manual — Missouri at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <MissouriTopicStub title="World's Fair Information Manual" />;
}
