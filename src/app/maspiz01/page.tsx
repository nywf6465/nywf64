import type { Metadata } from "next";
import { MaspizTopicStub } from "@/components/MaspizTopicStub";

export const metadata: Metadata = {
  title:
    "Mastro Pizza 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 nywf64.com",
  description:
    "Mastro Pizza 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Mastro Pizza at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <MaspizTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map Entries" />
  );
}
