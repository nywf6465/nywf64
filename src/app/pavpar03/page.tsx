import type { Metadata } from "next";
import { PavparTopicStub } from "@/components/PavparTopicStub";

export const metadata: Metadata = {
  title: 'Postcards — Pavilion of Paris — nywf64.com',
  description:
    'Postcards — Pavilion of Paris at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PavparTopicStub title={'Postcards'} />;
}
