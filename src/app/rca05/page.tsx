import type { Metadata } from "next";
import { RcaTopicStub } from "@/components/RcaTopicStub";

export const metadata: Metadata = {
  title: 'Gallery of Photographs — RCA — nywf64.com',
  description:
    'Gallery of Photographs — RCA at the 1964/1965 New York World\u2019s Fair on nywf64.com.',
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <RcaTopicStub title={'Gallery of Photographs'} />;
}
