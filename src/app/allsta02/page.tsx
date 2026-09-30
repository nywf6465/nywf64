import type { Metadata } from "next";
import { AllstaTopicStub } from "@/components/AllstaTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual \u2014 All-State Properties & Macy's \u2014 nywf64.com",
  description:
    "World's Fair Information Manual \u2014 All-State Properties & Macy's at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <AllstaTopicStub title={"World's Fair Information Manual"} />;
}
