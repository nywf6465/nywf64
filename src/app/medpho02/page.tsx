import type { Metadata } from "next";
import { MedphoTopicStub } from "@/components/MedphoTopicStub";

export const metadata: Metadata = {
  title: "Medo Photo Supply World's Fair Information Manual \u2014 nywf64.com",
  description:
    "Medo Photo Supply World's Fair Information Manual \u2014 Medo Photo Supply at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <MedphoTopicStub title="World's Fair Information Manual" />;
}
