import type { Metadata } from "next";
import { PavamiTopicStub } from "@/components/PavamiTopicStub";

export const metadata: Metadata = {
  title: 'Kroehler | Tell City | International Silver — Pavilion of American Interiors — nywf64.com',
  description:
    'Kroehler | Tell City | International Silver — Pavilion of American Interiors at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PavamiTopicStub title={'Kroehler | Tell City | International Silver'} />;
}
