import type { Metadata } from "next";
import { ChinaTopicStub } from "@/components/ChinaTopicStub";

export const metadata: Metadata = {
  title:
    "Brochure: Welcome to the China Pavilion (1964) \u2014 China \u2014 nywf64.com",
  description:
    "Brochure: Welcome to the China Pavilion (1964) \u2014 China at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <ChinaTopicStub title={"Brochure: Welcome to the China Pavilion (1964)"} />
  );
}
