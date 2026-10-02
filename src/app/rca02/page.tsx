import type { Metadata } from "next";
import { RcaTopicStub } from "@/components/RcaTopicStub";

export const metadata: Metadata = {
  title: 'World\'s Fair Information Manual — RCA — nywf64.com',
  description:
    'World\'s Fair Information Manual — RCA at the 1964/1965 New York World\u2019s Fair on nywf64.com.',
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <RcaTopicStub title={'World\'s Fair Information Manual'} />;
}
