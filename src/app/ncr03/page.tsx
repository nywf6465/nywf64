import type { Metadata } from "next";
import { NcrTopicStub } from "@/components/NcrTopicStub";

export const metadata: Metadata = {
  title: "NCR Postcards — nywf64.com",
  description:
    "NCR Postcards — NCR at the 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <NcrTopicStub title="Postcards" />;
}
