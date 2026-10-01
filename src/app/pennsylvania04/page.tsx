import type { Metadata } from "next";
import { PennsyTopicStub } from "@/components/PennsyTopicStub";

export const metadata: Metadata = {
  title: 'Dedication Ceremonies — Pennsylvania — nywf64.com',
  description:
    'Dedication Ceremonies — Pennsylvania at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <PennsyTopicStub title={'Dedication Ceremonies'} />;
}
