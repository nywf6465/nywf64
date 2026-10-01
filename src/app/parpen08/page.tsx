import type { Metadata } from "next";
import { ParpenTopicStub } from "@/components/ParpenTopicStub";

export const metadata: Metadata = {
  title: 'Parker Pavilion at Lodge of the Four Seasons — Parker Pen — nywf64.com',
  description:
    'Parker Pavilion at Lodge of the Four Seasons — Parker Pen at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <ParpenTopicStub title={'Parker Pavilion at Lodge of the Four Seasons'} />;
}
