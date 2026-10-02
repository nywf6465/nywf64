import type { Metadata } from "next";
import { ChinaTopicStub } from "@/components/ChinaTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 China \u2014 nywf64.com",
  description:
    "Photograph Album \u2014 China at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <ChinaTopicStub title={"Photograph Album"} />;
}
