import type { Metadata } from "next";
import { PennsyTopicStub } from "@/components/PennsyTopicStub";

export const metadata: Metadata = {
  title: 'Bell Ringer Certificate — Pennsylvania — nywf64.com',
  description:
    'Bell Ringer Certificate — Pennsylvania at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PennsyTopicStub title={'Bell Ringer Certificate'} />;
}
