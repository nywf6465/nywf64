import type { Metadata } from "next";
import { CaribbTopicStub } from "@/components/CaribbTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Caribbean \u2014 nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Caribbean at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <CaribbTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />
  );
}
