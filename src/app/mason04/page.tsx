import type { Metadata } from "next";
import { MasonTopicStub } from "@/components/MasonTopicStub";

export const metadata: Metadata = {
  title: "Masonic Center Photograph Album \u2014 nywf64.com",
  description:
    "Masonic Center Photograph Album \u2014 Masonic Center at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <MasonTopicStub title="Photograph Album" />;
}
