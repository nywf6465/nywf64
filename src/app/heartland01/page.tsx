import type { Metadata } from "next";
import { HeartlandTopicStub } from "@/components/HeartlandTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guide Book & Souvenir Map Entries \u2014 Heartland States U.S.A. \u2014 nywf64.com",
  description: "1964 & 1965 Official Guide Book & Souvenir Map Entries \u2014 Heartland States U.S.A. at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <HeartlandTopicStub title={"1964 & 1965 Official Guide Book & Souvenir Map Entries"} />;
}
