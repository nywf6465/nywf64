import type { Metadata } from "next";
import { HertzTopicStub } from "@/components/HertzTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Hertz Travel Center \u2014 nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Hertz Travel Center at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <HertzTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map Entries" />
  );
}
