import type { Metadata } from "next";
import { PorautTopicStub } from "@/components/PorautTopicStub";

export const metadata: Metadata = {
  title: 'Today: Terrace on the Park — Port Authority Heliport — nywf64.com',
  description:
    'Today: Terrace on the Park — Port Authority Heliport at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <PorautTopicStub title={'Today: Terrace on the Park'} />;
}
