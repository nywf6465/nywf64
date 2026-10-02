import type { Metadata } from "next";
import { PavparTopicStub } from "@/components/PavparTopicStub";

export const metadata: Metadata = {
  title: 'Promotional Brochure — Pavilion of Paris — nywf64.com',
  description:
    'Promotional Brochure — Pavilion of Paris at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PavparTopicStub title={'Promotional Brochure'} />;
}
