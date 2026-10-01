import type { Metadata } from "next";
import { PhilipTopicStub } from "@/components/PhilipTopicStub";

export const metadata: Metadata = {
  title: 'Pavilion Guide — Philippines — nywf64.com',
  description:
    'Pavilion Guide — Philippines at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <PhilipTopicStub title={'Pavilion Guide'} />;
}
