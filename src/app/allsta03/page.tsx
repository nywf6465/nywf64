import type { Metadata } from "next";
import { AllstaTopicStub } from "@/components/AllstaTopicStub";

export const metadata: Metadata = {
  title:
    "Photograph Album \u2014 All-State Properties & Macy's \u2014 nywf64.com",
  description:
    "Photograph Album \u2014 All-State Properties & Macy's at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <AllstaTopicStub title={"Photograph Album"} />;
}
