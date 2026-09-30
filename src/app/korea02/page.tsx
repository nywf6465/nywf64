import type { Metadata } from "next";
import { KoreaTopicStub } from "@/components/KoreaTopicStub";

export const metadata: Metadata = {
  title: "Korea World's Fair Information Manual \u2014 nywf64.com",
  description:
    "Korea World's Fair Information Manual \u2014 Korea, Republic of at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <KoreaTopicStub title={'World\'s Fair Information Manual'} />;
}
