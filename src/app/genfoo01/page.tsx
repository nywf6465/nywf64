import type { Metadata } from "next";
import { GenfooTopicStub } from "@/components/GenfooTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map \u2014 General Foods Arches \u2014 nywf64.com",
  description: "1964 & 1965 Official Guidebook & Souvenir Map \u2014 General Foods Arches at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <GenfooTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />;
}
