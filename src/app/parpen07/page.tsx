import type { Metadata } from "next";
import { ParpenTopicStub } from "@/components/ParpenTopicStub";

export const metadata: Metadata = {
  title: 'Best Seat in the House — Parker Pen — nywf64.com',
  description:
    'Best Seat in the House — Parker Pen at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <ParpenTopicStub title={'Best Seat in the House'} />;
}
