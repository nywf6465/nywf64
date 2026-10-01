import type { Metadata } from "next";
import { ParpenTopicStub } from "@/components/ParpenTopicStub";

export const metadata: Metadata = {
  title: 'Gallery of Photographs — Parker Pen — nywf64.com',
  description:
    'Gallery of Photographs — Parker Pen at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <ParpenTopicStub title={'Gallery of Photographs'} />;
}
