import type { Metadata } from "next";
import { PennsyTopicStub } from "@/components/PennsyTopicStub";

export const metadata: Metadata = {
  title: 'Gallery of Photographs — Pennsylvania — nywf64.com',
  description:
    'Gallery of Photographs — Pennsylvania at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PennsyTopicStub title={'Gallery of Photographs'} />;
}
