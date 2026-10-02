import type { Metadata } from "next";
import { PennsyTopicStub } from "@/components/PennsyTopicStub";

export const metadata: Metadata = {
  title: 'The New Pennsylvania | Looking Ahead — Pennsylvania — nywf64.com',
  description:
    'The New Pennsylvania | Looking Ahead — Pennsylvania at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PennsyTopicStub title={'The New Pennsylvania | Looking Ahead'} />;
}
