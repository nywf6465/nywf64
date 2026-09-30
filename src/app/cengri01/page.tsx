import type { Metadata } from "next";
import { CengriTopicStub } from "@/components/CengriTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Century Grill \u2014 nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Century Grill at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <CengriTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />
  );
}
