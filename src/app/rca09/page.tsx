import type { Metadata } from "next";
import { RcaTopicStub } from "@/components/RcaTopicStub";

export const metadata: Metadata = {
  title: 'See Yourself on Color TV — RCA — nywf64.com',
  description:
    'See Yourself on Color TV — RCA at the 1964/1965 New York World\u2019s Fair on nywf64.com.',
};

export default function Page() {
  return <RcaTopicStub title={'See Yourself on Color TV'} />;
}
