import type { Metadata } from "next";
import { AfricaTopicStub } from "@/components/AfricaTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Africa \u2014 nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Africa at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <AfricaTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />
  );
}
