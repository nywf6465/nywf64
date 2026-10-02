import type { Metadata } from "next";
import { FranceTopicStub } from "@/components/FranceTopicStub";

export const metadata: Metadata = {
  title: "A World's Fair Phantom — France — nywf64.com",
  description:
    "A World's Fair Phantom — France at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <FranceTopicStub title="A World's Fair Phantom" />;
}
