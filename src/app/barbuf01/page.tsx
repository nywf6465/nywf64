import type { Metadata } from "next";
import { BarbufTopicStub } from "@/components/BarbufTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Bar, Buffet and Cafeteria \u2014 nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Bar, Buffet and Cafeteria at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <BarbufTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />
  );
}
