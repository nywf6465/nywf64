import type { Metadata } from "next";
import { MainmallTopicStub } from "@/components/MainmallTopicStub";

export const metadata: Metadata = {
  title:
    "Main Mall 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 nywf64.com",
  description:
    "Main Mall 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Main Mall at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <MainmallTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map Entries" />
  );
}
