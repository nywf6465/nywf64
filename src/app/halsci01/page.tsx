import type { Metadata } from "next";
import { HalsciTopicStub } from "@/components/HalsciTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Hall of Science \u2014 nywf64.com",
  description: "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Hall of Science at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <HalsciTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />;
}
