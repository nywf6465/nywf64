import type { Metadata } from "next";
import { PavamiTopicStub } from "@/components/PavamiTopicStub";

export const metadata: Metadata = {
  title: '7000 Tomorrows: Whirlpool — Pavilion of American Interiors — nywf64.com',
  description:
    '7000 Tomorrows: Whirlpool — Pavilion of American Interiors at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PavamiTopicStub title={'7000 Tomorrows: Whirlpool'} />;
}
