import type { Metadata } from "next";
import { PhilipTopicStub } from "@/components/PhilipTopicStub";

export const metadata: Metadata = {
  title: 'Gallery of Photographs — Philippines — nywf64.com',
  description:
    'Gallery of Photographs — Philippines at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <PhilipTopicStub title={'Gallery of Photographs'} />;
}
