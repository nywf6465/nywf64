import type { Metadata } from "next";
import { PhilipTopicStub } from "@/components/PhilipTopicStub";

export const metadata: Metadata = {
  title: 'Postcards — Philippines — nywf64.com',
  description:
    'Postcards — Philippines at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PhilipTopicStub title={'Postcards'} />;
}
