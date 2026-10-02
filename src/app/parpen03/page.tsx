import type { Metadata } from "next";
import { ParpenTopicStub } from "@/components/ParpenTopicStub";

export const metadata: Metadata = {
  title: 'Postcards — Parker Pen — nywf64.com',
  description:
    'Postcards — Parker Pen at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <ParpenTopicStub title={'Postcards'} />;
}
